import React from "react";

const SearchDashboard: React.FC = () => {
  return (
    <div className="flex items-center p-2 w-full max-w-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gray-500 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a7 7 0 011.682 13.657l4.854 4.854a1 1 0 11-1.414 1.414l-4.854-4.854A7 7 0 1111 4z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border-none focus:outline-none bg-custombg"
      />
    </div>
  );
};

export default SearchDashboard;
