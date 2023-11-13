"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const EditLedger = ({ params }) => {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [gstno, setGstno] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const route = useRouter()

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://gemsbooks.pockethost.io/api/collections/ledger/records/${params.id}`)
      .then((response) => {
        setName(response.data.name);
        setAccount(response.data.account);
        setAddress(response.data.address);
        setPhone(response.data.phone);
        setEmail(response.data.email);
        setState(response.data.state);
        setCountry(response.data.country);
        setPincode(response.data.pincode);
        setGstno(response.data.gstno);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  }, []);

  const handleSaveLedger = () => {
    const data = {
      name,
      account,
      address,
      phone,
      email,
      state,
      country,
      pincode,
      gstno,
    };
    setLoading(true);
    axios
      .patch(`https://gemsbooks.pockethost.io/api/collections/ledger/records/${params.id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Ledger Edited successfully", { variant: "success" });
        route.back()
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <Card className="bg-base-100 m-5 p-10 w-90%" shadow={false}>
      <Typography variant="h4" className=" text-base-content">
        Edit Ledger
      </Typography>

      <form className="mt-8 mb-2  sm:w-90%" >
        <div className="mb-4 flex flex-wrap text-base-content md:grid md:grid-cols-2 gap-2">
          <Input
            size="lg"
            type="text"
            value={name}
            color="teal"
            onChange={(e) => setName(e.target.value)}
            label="Name"
          />
          <Input
            size="lg"
            type="text"
            color="teal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            label="Address"
          />
          <Input
            size="lg"
            type="number"
            color="teal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="Phone"
          />
          <Input
            size="lg"
            type="email"
            color="teal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
          <select
            value={address}
            onChange={(e) => setState(e.target.value)}
            className="select select-bordered w-full  "
          >
            <option disabled>Select State</option>
            <option >Andhra Pradesh</option>
            <option>Andaman and Nicobar Islands</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chandigarh</option>
            <option>Chhattisgarh</option>
            <option>Dadar and Nagar Haveli</option>
            <option>Daman and Diu</option>
            <option>Delhi</option>
            <option>Lakshadweep</option>
            <option>Puducherry</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jammu and Kashmir</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
          </select>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="select select-bordered w-full"
          >
            <option disabled>Country</option>
            <option value="India">India</option>
          </select>

          <Input
            size="lg"
            color="teal"
            type="number"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            label="Pincode"
          />
          <Input
            size="lg"
            color="teal"
            type="text"
            value={gstno}
            onChange={(e) => setGstno(e.target.value)}
            label="Gstno"
          />
        </div>
        <select
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          className="select select-bordered w-full "
          
        >
          <option disabled>Account Type?</option>
          <option>Sundry Debtor</option>
          <option>Sundry Creditor</option>
        </select>
        <Button onClick={handleSaveLedger} className="mt-6 mb-7 bg-accent" >
          Register
        </Button>
      </form>
    </Card>
  );
};

export default EditLedger;
