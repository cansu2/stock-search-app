import './App.css';
import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import StockPanel from './components/StockPanel';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [stock, setStock] = useState([]);

  const handleSearchInputKeyPress = event => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed! Search Value: ' + event.target.value);
      const text = event.target.value.toLowerCase();
      setSearchText(text);
    }
  };

  //not sure about what to do with this part
  useEffect(() => {
    localStorage.setItem('searchText', searchText)
  }, []);

  const searchStock = async (url) => {
    const response = await fetch(url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "5180de34cfmshe8f9ffb251ed473p1ac869jsn6c78951dd541",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    })
    const data = await response.json();
    setStock(data);
    console.log(data);
    setLoading(false);
  }

  //add logic to handle bad search
  useEffect(() => {
    let url;
    if (searchText) {
      url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-holders?symbol=${searchText}&region=US`;
      searchStock(url);
    } else if (searchText === '') {
      console.log('need to clean the ui')
    } else {
      console.log('no search value')
    }
  }, [searchText])

  return (
    <div>
      <h1> Search Stocks</h1>
      <hr />

      <Search onKeyPress={handleSearchInputKeyPress} />
      <br></br>
      {/* <div>{loading ? <div>Your results will be displayed here</div> : <div><h1>{JSON.stringify(stock)}</h1></div>}</div> */}
      {/* <div>{loading ? <div>Your results will be displayed here</div> : <StockPanel stock={stock}></StockPanel>}</div> */}
      <div>{loading ? <div>Your results will be displayed here</div> : <div>{stock.quoteType.longName}</div>}</div>
    </div>
  );
}

export default App;


