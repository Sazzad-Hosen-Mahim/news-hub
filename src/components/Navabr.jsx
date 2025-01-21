import { useState } from "react";
import logo from "../assets/images/logo.png";
import Navitem from "./UI/Navitem";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const Navabr = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="container px-4 mx-auto md:px-8 lg:px-10 xl:px-0 max-w-7xl">
      <div className="flex flex-wrap items-center justify-between py-3">
        <div className="cursor-pointer ">
          <img className="w-auto h-14" src={logo} alt="logo" />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Navitem />
          </div>
          <div className="items-center hidden gap-2 p-2 rounded-full sm:flex ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-primary ">
            <IoSearchOutline />
            <input className="outline-none " type="text" placeholder="Search" />
          </div>

          <div
            onClick={() => {
              setMenu(true);
            }}
            className="text-3xl cursor-pointer lg:hidden"
          >
            <IoIosMenu />
          </div>
          {menu ? <MobileMenu /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Navabr;
