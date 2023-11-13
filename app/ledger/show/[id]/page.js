"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const ShowLedger = ({ params }) => {
  const [ledger, setLedger] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pocketbase-production-70ff.up.railway.app/api/collections/ledger/records/${params.id}`)
      .then((response) => {
        setLedger(response.data)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Show Ledger</h1>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{ledger._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Name</span>
            <span>{ledger.name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Account</span>
            <span>{ledger.account}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Phone</span>
            <span>{ledger.phone}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Email</span>
            <span>{ledger.email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">State</span>
            <span>{ledger.state}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Country</span>
            <span>{ledger.country}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Pincode</span>
            <span>{ledger.pincode}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Gstno</span>
            <span>{ledger.gstno}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(ledger.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(ledger.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowLedger;
