import React from "react";

const BeerNavbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Company Logo" className="h-10" />
      </div>
      <div className="buttons">
        <button
          className="px-4 py-2 rounded bg-red-600 hover:bg-red-700"
        //   onClick={}
        >
          Show All Beers
        </button>
        <button
          className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 ml-4"
        //   onClick={}
        >
          Random
        </button>
      </div>
    </nav>
  );
};

export default BeerNavbar;
