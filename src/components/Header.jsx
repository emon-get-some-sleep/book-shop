import React, { useState } from "react";
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
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
          title="Home Link"
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
    </div>
  );
};

export default Header;
