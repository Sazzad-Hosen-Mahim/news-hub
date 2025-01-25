import React from "react";

const StockMarket = ({ stocks }) => {
  return (
    <div className="bg-yellow-100 shadow p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-3 text-blue-700">Stock Market</h2>
      <ul className="space-y-2 text-sm">
        {stocks.map((stock, index) => (
          <li key={index} className="flex justify-between py-3">
            <span>{stock.name}</span>
            <span
              className={`${
                stock.change > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {stock.change}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockMarket;
