import React from "react";

const WeatherUpdates = ({ cities }) => {
  return (
    <div className="bg-blue-50 shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-blue-900 mb-2">
        Weather Updates
      </h2>
      <div className="text-sm">
        {cities.map((city, index) => (
          <p key={index} className="py-5">
            {city.icon} {city.name}: {city.temp}°C, {city.condition}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WeatherUpdates;
