import { Link } from "react-router-dom";

const Navitem = () => {
  return (
    <div>
      <ul className="flex items-center gap-8  me-10 w-full">
        <Link to="/">
          <li
            className="cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform relative
before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-400 before:transition-all before:duration-300 hover:before:w-full
"
          >
            Home
          </li>
        </Link>
        <Link to="/news/category/latest">
          <li
            className="cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform relative
before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-400 before:transition-all before:duration-300 hover:before:w-full
"
          >
            Latest
          </li>
        </Link>
        <Link to="/news/category/politics">
          <li
            className="cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform relative
before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-400 before:transition-all before:duration-300 hover:before:w-full
"
          >
            Politics
          </li>
        </Link>
        <Link to="/news/category/bangladesh">
          <li
            className="cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform relative
before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-400 before:transition-all before:duration-300 hover:before:w-full
"
          >
            Bangladesh
          </li>
        </Link>
        <Link to="/news/category/sports">
          <li
            className="cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform relative
before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-400 before:transition-all before:duration-300 hover:before:w-full
"
          >
            Sports
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navitem;
