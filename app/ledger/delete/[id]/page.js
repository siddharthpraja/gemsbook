"use client";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const DeleteLedger = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const route = useRouter();
  const pathname = usePathname();
  const style = {
    active: "text-center ",
    inactive: "text-center hidden",
  };

  const handleDeleteLedger = () => {
    setLoading(true);
    axios
      .delete(`https://gemsbooks.pockethost.io/api/collections/ledger/records/${params.id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
        route.back();
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div
      className={pathname.startsWith("/ledger/delete") ? style.active : style.inactive}
    >
      <div className="card w-96 bg-neutral text-neutral-content mt-20 m-auto">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Delete Ledger!</h2>
          <p>Are You Sure You want to delete this book?</p>
          <div className="card-actions justify-end">
            <button onClick={handleDeleteLedger} className="btn btn-primary">
              Accept
            </button>
            <button onClick={() => route.back()} className="btn btn-ghost">
              Deny
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteLedger;
