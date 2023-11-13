"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Page";
import ProductRecord from "./records";

function ProductForm() {
  // To hold the actual data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState([]);
  const [result, setResult] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get("https://gemsbooks.pockethost.io/api/collections/products/records")
      .then((res) => {
        setData(res.data.items);
        setSearchFilter(res.data.items);
        console.log(setData);
        setLoading(false);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  useEffect(() => {
    const results = searchFilter.filter((resp) =>
      resp.name.toLowerCase().includes(result)
    );
    setData(results);
  }, [result]);
  
  const SearchField = (evt) => {
    setResult(evt.target.value);
  };

  const CloseFilter = () => {
    setData(searchFilter);
  };


  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord + 1);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className="mt-4">
      <ProductRecord data={currentRecords} result={result} SearchField={SearchField} CloseFilter={CloseFilter} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ProductForm;
