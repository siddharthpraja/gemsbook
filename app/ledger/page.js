import React from "react";
import DeleteLedger from "./delete/[id]/page";
import Form from "@/components/Ledger/Form";

const Ledger = () => {
  return (
    <div>
      <Form />
      <DeleteLedger/>
    </div>
  );
};

export default Ledger;
