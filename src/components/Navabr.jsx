import { useState } from "react";
import logo from "../assets/images/logo.png";
import Navitem from "./UI/Navitem";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navabr = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full  bg-gray-200 rounded-lg ">
      <div className="flex flex-wrap items-center justify-between py-3">
        <Link to="/">
          <div className="cursor-pointer ms-4">
            <img className="w-auto h-14" src={logo} alt="logo" />
          </div>
        </Link>

        <div className="flex items-center justify-between gap-4 ">
          <div className="hidden lg:block mx-auto">
            <Navitem />
          </div>
          <div className="items-center hidden gap-2 p-2 me-3 rounded-full sm:flex ring-1 ring-gray-600 focus-within:ring-2 focus-within:ring-primary ">
            <IoSearchOutline />
            <input
              className="outline-none bg-gray-200"
              type="text"
              placeholder="Search"
            />
          </div>

          <div
            onClick={() => {
              setMenu(true);
            }}
            className="text-3xl cursor-pointer lg:hidden"
          >
            <IoIosMenu />
          </div>
          {/* {menu ? <MobileMenu /> : <></>} */}
        </div>
      </div>
    </div>
  );
};

export default Navabr;
