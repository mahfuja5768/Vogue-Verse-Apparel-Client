import { FaBars } from "react-icons/fa";
import logo from "../assets/logoName.png";
import { Link, NavLink } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="mb-8 bg-secondary text-black">
        <div className="flex items-center flex-row-reverse p-4 justify-between lg:flex-row gap-6">
          <div
            onClick={() => setOpen(!open)}
            className="h-6 w-6 lg:hidden block"
          >
            {
              // open ? 'close icon' : 'open icon'
              open ? (
                <FaX className="text-2xl text-white"></FaX>
              ) : (
                <FaBars className="text-2xl text-white"></FaBars>
              )
            }
          </div>
          <div>
            <Link to="/">
              <img src={logo} alt="" className="w-48 h-12" />
            </Link>
          </div>
        </div>
        <ul
          className={`flex flex-col justify-center font-bold text-lg  text-white z-10  items-start gap-5 px-8 py-6 pb-12 bg-secondary w-full absolute duration-700 all ${
            open ? "top-16" : "top-[-500px]"
          }`}
        >
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `underline decoration-white  decoration-4 underline-offset-8`
                  : "hover:text-hoverText"
              }
            >
              Home
            </NavLink>
          </li>
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/addProduct"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : "hover:text-hoverText"
              }
            >
              Add Product
            </NavLink>
          </li>
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/myCart"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : "hover:text-hoverText"
              }
            >
              My Cart
            </NavLink>
          </li>
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : "hover:text-hoverText"
              }
            >
              Register
            </NavLink>
          </li>
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : "hover:text-hoverText"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
