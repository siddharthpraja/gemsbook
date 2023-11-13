"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Records from "./records";
import Pagination from "./Page";

function Photos() {
  // To hold the actual data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState([]);
  const [result, setResult] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get("https://gemsbooks.pockethost.io/api/collections/ledger/records")
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

  const filter1 = (e) => {
    setData(
        searchFilter.filter((resp) => resp.account.includes(e.target.value))
    );
  };
  const filter2 = (e) => {
    setData(searchFilter.filter((resp) => resp.state.includes(e.target.value)));
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
      <Records data={currentRecords} result={result} SearchField={SearchField} filter1={filter1} filter2={filter2} CloseFilter={CloseFilter} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Photos;
