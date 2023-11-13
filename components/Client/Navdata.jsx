"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHome, AiFillInfoCircle, AiFillSetting } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { ImBoxRemove, ImBoxAdd } from "react-icons/im";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const style = {
  active: "flex text-center rounded-2xl p-4 mx-6 my-2 bg-accent",
  inactive: "flex text-center rounded-2xl p-4 mx-6 my-2 bg-base-100",
};

const Navdata = () => {
  const pathname = usePathname();

  return (
    <div>
      <li>
        <Link href="/" className={style.inactive}>
          <AiFillHome className="text-2xl " />
          <h1 className="text-lg font-bold pl-3">Dashboard</h1>
        </Link>
      </li>
      <li>
        <Link
          href="/sales"
          className={
            pathname.startsWith("/sales") ? style.active : style.inactive
          }
        >
          <ImBoxRemove className="text-2xl" />
          <h1 className="text-lg font-bold pl-3">Sales</h1>
        </Link>
      </li>
      <li>
        <Link
          href="/purchase"
          className={
            pathname.startsWith("/purchase") ? style.active : style.inactive
          }
        >
          <ImBoxAdd className="text-2xl" />
          <h1 className="text-lg font-bold pl-3">Purchase</h1>
        </Link>
      </li>
      <li>
        <Link
          href="/ledger"
          className={
            pathname.startsWith("/ledger") ? style.active : style.inactive
          }
        >
          <FaUserFriends className="text-2xl" />
          <h1 className="text-lg font-bold pl-3">Ledger</h1>
        </Link>
      </li>
      <li>
        <Link
          href="/product"
          className={
            pathname.startsWith("/product") ? style.active : style.inactive
          }
        >
          <MdOutlineProductionQuantityLimits className="text-2xl" />
          <h1 className="text-lg font-bold pl-3">Product</h1>
        </Link>
      </li>
      <li className="h-[25vh] bg-transparent"></li>
      <li>
        <Link
          href="/setting"
          className={
            pathname.startsWith("/setting") ? style.active : style.inactive
          }
        >
          <AiFillSetting className="text-2xl" />
          <h1 className="text-lg font-bold pl-3">Setting</h1>
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={
            pathname.startsWith("/about") ? style.active : style.inactive
          }
        >
          <AiFillInfoCircle className="text-2xl" />
          <h1 className="text-lg font-bold pl-3">About us</h1>
        </Link>
      </li>
      <p className="text-center mt-3 text-sm ">Copyright@2023 Gautam</p>
    </div>
  );
};

export default Navdata;
