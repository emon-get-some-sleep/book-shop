import React from "react";
import { BoltIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Logo section  */}
      <div className="inline-flex items-center">
        <Link to="/" className="inline-flex items-center ">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            nextPage
          </span>
        </Link>
      </div>

      {/* Nav item section  */}
       <ul className="items-center hidden space-x-8 lg:flex">
        <li>
          <NavLink
          to="/"
          className={({isActive}) => (isActive ? 'active' : 'defualt')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
          to="/books"
          className={({isActive}) => (isActive ? 'active' : 'defualt')}
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
          to="/about"
          className={({isActive}) => (isActive ? 'active' : 'defualt')}
          >
            About us
          </NavLink>
        </li>
       </ul>
    </div>
  );
};

export default Header;
