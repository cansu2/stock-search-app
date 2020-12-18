import React from 'react';

export default function StockPanel({ stock }) {
    return stock.map(stock => {
        return (
            <div>{stock}</div>
        );
    });
};