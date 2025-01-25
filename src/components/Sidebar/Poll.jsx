import React, { useState } from "react";

const PollWidget = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleVote = () => {
    console.log("Voted for:", selectedOption);
  };

  return (
    <div className="bg-indigo-400 shadow p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Your Opinion</h2>
      <p className="text-sm mb-2">What is your favorite news category?</p>
      <ul className="space-y-2">
        <li>
          <input
            type="radio"
            name="poll"
            id="tech"
            value="Technology"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="tech" className="ml-2">
            Technology
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="poll"
            id="sports"
            value="Sports"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="sports" className="ml-2">
            Sports
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="poll"
            id="business"
            value="Business"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="business" className="ml-2">
            Business
          </label>
        </li>
      </ul>
      <button
        onClick={handleVote}
        className="mt-3 bg-black text-white py-2 px-4 rounded-lg"
      >
        Vote
      </button>
    </div>
  );
};

export default PollWidget;
