import React from 'react';

export default function StockPanel({ stock }) {
    return (
        <React.Fragment>
            <div>{stock.symbol}</div>
            <div>{stock.quoteType.longName}</div>
            <div>{stock.summaryDetail.dayHigh}</div>
            <div>{stock.summaryDetail.dayLow} {stock.summaryDetail.currency}</div>
        </React.Fragment>
    );
};