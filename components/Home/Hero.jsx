import React from "react";
import { GrMoney } from "react-icons/gr";
import { GiMoneyStack } from "react-icons/gi";
import { BsCartPlusFill, BsCartDashFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="w-full grid lg:grid-cols-4 grid-cols-2">
      <div className="bg-base-100 h-[10vh] flex  justify-between rounded-lg m-2 p-3">
        <div>
          <p className="text-[0.8rem] font-light  ">Total Outstanding (DR.)</p>
          <h1 className=" font-bold text-2xl">
            $2023 <span className="text-sm text-error">+55%</span>
          </h1>
        </div>
        <GiMoneyStack className="text-5xl rounded-lg m-2 bg-error p-2  " />
      </div>
      <div className="bg-base-100 h-[10vh] flex justify-between rounded-lg m-2 p-3">
        <div>
          <p className="text-[0.8rem] font-light  ">Total Outstanding (CR.)</p>
          <h1 className=" font-bold text-2xl">
            $1239 <span className="text-sm text-success">+23%</span>
          </h1>
        </div>
        <GrMoney className="text-5xl rounded-lg p-2 m-2  bg-success" />
      </div>
      <div className="bg-base-100 h-[10vh] flex justify-between rounded-lg m-2 p-3">
        <div>
          <p className="text-[0.8rem] font-light  ">Total Sales</p>
          <h1 className=" font-bold text-2xl">
            $2023 <span className="text-sm text-info">+55%</span>
          </h1>
        </div>
        <BsCartDashFill className="text-5xl rounded-lg p-2 m-2 bg-info" />
      </div>
      <div className="bg-base-100 h-[10vh] flex justify-between rounded-lg m-2 p-3">
        <div>
          <p className="text-[0.8rem] font-light  ">Total Purchase</p>
          <h1 className=" font-bold text-2xl">
            $2023 <span className="text-sm text-warning">+55%</span>
          </h1>
        </div>
        <BsCartPlusFill className="text-5xl rounded-lg p-2 m-2 bg-warning " />
      </div>
    </div>
  );
};

export default Hero;
