import { Link } from "react-router-dom";

const Navitem = () => {
  return (
    <div>
      <ul className="flex items-center gap-6 w-full">
        <Link to="/">
          <li className="transition-all cursor-pointer hover:text-primary">
            Home
          </li>
        </Link>
        <Link to="/news/category/latest">
          <li className="transition-all cursor-pointer hover:text-primary">
            Latest
          </li>
        </Link>
        <Link to="/news/category/politics">
          <li className="transition-all cursor-pointer hover:text-primary">
            Politics
          </li>
        </Link>
        <Link to="/news/category/bangladesh">
          <li className="transition-all cursor-pointer hover:text-primary">
            Bangladesh
          </li>
        </Link>
        <Link to="/news/category/sports">
          <li className="transition-all cursor-pointer hover:text-primary">
            Sports
          </li>
        </Link>
        {/* <li className='transition-all cursor-pointer hover:text-primary'>Crypto</li>
            <li className='transition-all cursor-pointer hover:text-primary'>wealth</li>
            <li className='transition-all cursor-pointer hover:text-primary'>International</li>
            <li className='transition-all cursor-pointer hover:text-primary'>Gallery</li>
            <li className='transition-all cursor-pointer hover:text-primary'>More</li> */}
      </ul>
    </div>
  );
};

export default Navitem;
