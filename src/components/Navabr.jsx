import { useEffect, useState } from "react";
import logo from "../../public/logo2.png";
import Navitem from "./UI/Navitem";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navabr = () => {
  const [menu, setMenu] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchVal(searchValue);
    navigate(`/search/${searchValue}`);
  };

  const url = `https://api.pewds.vercel.app/prothomalo/search/${searchVal}?start_from=0&per_page=15`;
  const fetchNewses = async () => {
    try {
      const { data } = await axios.get(url);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNewses();
  }, [searchVal]);

  // console.log(searchVal);
  // console.log(data);
  return (
    <div className="w-full bg-gray-200 rounded-lg ">
      <div className="flex flex-wrap items-center justify-between py-3">
        <Link to="/">
          <div className="cursor-pointer ms-4">
            <img className="w-auto h-16" src={logo} alt="logo" />
          </div>
        </Link>

        <div className="flex items-center justify-between gap-4 ">
          <div className="hidden lg:block mx-auto">
            <Navitem />
          </div>
          <div className="items-center hidden gap-2 p-2 me-3 rounded-full sm:flex ring-1 ring-gray-600 focus-within:ring-2 focus-within:ring-blue-400 ">
            <IoSearchOutline />
            <input
              className="outline-none bg-gray-200"
              type="text"
              placeholder="Search"
              onChange={(e) => {
                handleSearchChange(e);
              }}
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
