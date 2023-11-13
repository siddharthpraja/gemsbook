import Link from "next/link";
import React from "react";


const Producthead = ({SearchField, result, CloseFilter}) => {
  return (
      <div className="flex mb-4">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered"
          value={result}
          onChange={SearchField}
        />
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
        <p className="btn btn-warning mr-5" onClick={CloseFilter}>
          Clear
        </p>
        <Link href='/product/create' className="btn btn-accent">Add Product</Link >
      </div>
  );
};

export default Producthead;
