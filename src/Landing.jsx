// Landing.jsx

import React, { useState } from 'react';

function Landing({ onSearch, searchResults, onSafetySearch }) {
  const [modelYear, setModelYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  const handleSearchClick = () => {
    // Invoke the onSearch function with the provided parameters
    onSearch(modelYear, make, model);
  };

  const handleSafetySearchClick = () => {
    // Invoke the onSafetySearch function with the provided parameters
    onSafetySearch(modelYear, make, model);
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-200">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Model Year"
          value={modelYear}
          onChange={(e) => setModelYear(e.target.value)}
          className="mr-2 p-2 border border-gray-300"
        />
        <input
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="mr-2 p-2 border border-gray-300"
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="mr-2 p-2 border border-gray-300"
        />
        <button
          onClick={handleSearchClick}
          className="bg-blue-500 text-white p-2 rounded mr-2"
        >
          Search Recalls
        </button>
        <button
          onClick={handleSafetySearchClick}
          className="bg-green-500 text-white p-2 rounded"
        >
          Search Safety Ratings
        </button>
      </div>
      <div>
        {searchResults && searchResults.results.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">
              {searchResults.Count} Results Found
            </h2>
            {searchResults.results.map((result, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-300">
                <h3 className="text-lg font-semibold mb-2">
                  {result.Manufacturer}
                </h3>
                <p>
                  <strong>Campaign Number:</strong> {result.NHTSACampaignNumber}
                </p>
                <p>
                  <strong>Report Received Date:</strong> {result.ReportReceivedDate}
                </p>
                <p>
                  <strong>Component:</strong> {result.Component}
                </p>
                <p>
                  <strong>Summary:</strong> {result.Summary}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;
