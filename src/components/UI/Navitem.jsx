import { Link } from "react-router-dom";

const Navitem = () => {
  return (
    <div>
      <ul className="flex items-center gap-8  me-10 w-full">
        <Link to="/">
          <li className="cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform">
            Home
          </li>
        </Link>
        <Link to="/news/category/latest">
          <li className="cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform">
            Latest
          </li>
        </Link>
        <Link to="/news/category/politics">
          <li className="cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform">
            Politics
          </li>
        </Link>
        <Link to="/news/category/bangladesh">
          <li className="cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform">
            Bangladesh
          </li>
        </Link>
        <Link to="/news/category/sports">
          <li className="cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform">
            Sports
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navitem;
