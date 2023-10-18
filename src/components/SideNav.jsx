import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logoName.png";

const SideNav = () => {
  return (
    <div className="bg-gradient-to-t from-white to-blue-500 h-full sticky  p-5 flex flex-col gap-12 pt-12 text-black">
      <Link to="/">
        <img src={logo} alt="" className="w-72 h-24" />
      </Link>
      <nav>
        <ul className="flex flex-col justify-center gap-6 font-bold text-lg ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-secondary  decoration-4 underline-offset-8"
                  : "hover:text-secondary"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addProduct"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-secondary decoration-4 underline-offset-8"
                  : "hover:text-secondary"
              }
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myCart"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-secondary decoration-4 underline-offset-8"
                  : "hover:text-secondary"
              }
            >
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-secondary decoration-4 underline-offset-8"
                  : "hover:text-secondary"
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-secondary decoration-4 underline-offset-8"
                  : "hover:text-secondary"
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

export default SideNav;
