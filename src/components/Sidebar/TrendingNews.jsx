import React from "react";

const TrendingNews = ({ news }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-red-500">Trending News</h2>
      <ul className="space-y-5">
        {news.map((item, index) => (
          <li key={index} className="flex items-center">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-12 h-12 rounded-md mr-3"
            />
            <a
              href={item.link}
              className="text-sm font-medium text-gray-800 hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingNews;
