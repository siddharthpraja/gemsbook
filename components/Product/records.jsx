import Link from "next/link";
import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineDelete, MdOutlineExpandMore } from "react-icons/md";
import Producthead from "./Cards";

const ProductRecord = ({
  data,
  result,
  SearchField,
  CloseFilter,
}) => {
  return (
    <div className="items-center m-4  ">
      <Producthead
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
                  Product Name
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  Product Image
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  Price
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  Stock Group
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  HSN Coad
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                  State
                </div>
              </th>
              <th>
                <div className="flex items-center gap-2">
                 GST Rate
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((product, index) => (
              <tr key={index + 1}>
                <td>
                  <Link href={`/product/show/${product.id}`}>{product.name}</Link>
                </td>
                <td><img className="cursor-pointer" src={`https://gemsbooks.pockethost.io/api/files/products/${product.id}/${product.image}`} width={40} height={40} alt={product.id} /></td>
                <td>{product.price}</td>
                <td>{product.group}</td> 
                <td>{product.hsncoad}</td>
                <td>{product.gstrate}</td>
                <td>
                  <div className="flex gap-6">
                    <Link
                      href={`/product/edit/${product.id}`}
                      tabIndex={0}
                      className="btn btn-outline btn-warning"
                    >
                      <FaUserEdit />
                    </Link>
                    <Link
                      href={`/product/delete/${product.id}`}
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

export default ProductRecord;
