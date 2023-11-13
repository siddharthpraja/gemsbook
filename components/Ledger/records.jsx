import Link from "next/link";
import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineDelete, MdOutlineExpandMore } from "react-icons/md";
import Cards from "./Cards";

const Records = ({
  data,
  result,
  SearchField,
  CloseFilter,
  filter1,
  filter2,
}) => {
  return (
    <div className="items-center m-4  ">
      <Cards
          result={result}
          SearchField={SearchField}
          CloseFilter={CloseFilter}
        />
      <div className="overflow-x-auto shadow-lg rounded-md">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr className="bg-base-200">
              <th>
                <div className="flex items-center gap-2">
                  Party Name
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  Account
                  <div className="dropdown dropdown-bottom dropdown-end ">
                    <label tabIndex={0} className="cursor-pointer">
                      <MdOutlineExpandMore />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[51] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <button value={"Sundry Debtor"} onClick={filter1}>
                          Sundry Debtor
                        </button>
                      </li>
                      <li>
                        <button value={"Sundry Creditor"} onClick={filter1}>
                          Sundry Creditor
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  Phone
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  Email
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  GST No
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  State
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0}>
                      <MdOutlineExpandMore />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[51] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {data.map((ledger) => (
                        <li key={ledger.id}>
                          <button value={ledger.state} onClick={filter2}>
                            {ledger.state}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  Oprations
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((ledger, index) => (
              <tr key={index + 1}>
                <td>
                  <Link href={`/ledger/show/${ledger.id}`}>{ledger.name}</Link>
                </td>
                <td>{ledger.account}</td>
                <td>{ledger.phone}</td>
                <td>{ledger.email}</td>
                <td>{ledger.gstno}</td>
                <td>{ledger.state}</td>
                <td>
                  <div className="flex gap-6">
                    <Link
                      href={`/ledger/edit/${ledger.id}`}
                      tabIndex={0}
                      className="btn btn-outline btn-warning"
                    >
                      <FaUserEdit />
                    </Link>
                    <Link
                      href={`/ledger/delete/${ledger.id}`}
                      tabIndex={0}
                      className="btn btn-outline btn-error"
                    >
                      <MdOutlineDelete />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Records;
