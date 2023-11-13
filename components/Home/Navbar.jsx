
"use client"
import { AiFillSetting } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://gemsbooks.pockethost.io");

const signingoogle = async () => {
  const authData = await pb
    .collection("users")
    .authWithOAuth2({ provider: "google" });

  // after the above you can also access the auth data from the authStore
  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);
  console.log(pb.authStore.model.id);
};

const Navbar = () => {
  return (
    <div className="lg:w-full  lg:text-end bg-base-300">
      <div className="flex-none  ">
        <ul className="menu menu-horizontal  items-center text-lg">
          {/* Navbar menu content here */}
          <li>
            <div className="hidden sm:block">
              <AiFillSetting />
            </div>
          </li>
          <li>
            <div className=" hidden sm:block">
              <IoMdNotifications />
            </div>
          </li>
          <li>
            <div className="flex items-center bg-base-100">
              <BiSolidUser />
              <a onClick={signingoogle}>Sign up</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
