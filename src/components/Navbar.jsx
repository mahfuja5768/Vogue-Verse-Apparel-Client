import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/logoName.png";
import { Link, NavLink } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { useContext, useState } from "react";
import userProfile from "../assets/user.png";
import { AuthContext } from "./ProviderContext/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showPass, setShowPass] = useState(true);

  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully User Logged out",
          icon: "success",
          confirmButtonText: "Done",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <nav className="mb-12 bg-gradient-to-b from-yellow-200 to-transparent border-b-2 shadow-lg text-black">
        <div className="max-w-[1280px] mx-auto lg:grid lg:grid-cols-4 lg:gap-2 flex items-center flex-row-reverse p-4 justify-between lg:flex-row gap-6">
          <div
            onClick={() => setOpen(!open)}
            className="h-6 w-6 lg:hidden block"
          >
            {
              // open ? 'close icon' : 'open icon'
              open ? (
                <FaX className="text-2xl text-black"></FaX>
              ) : (
                <FaBars className="text-2xl text-black"></FaBars>
              )
            }
          </div>
          <div>
            <Link to="/">
              <img src={logo} alt="" className="w-48 h-12" />
            </Link>
          </div>

          <div className=" justify-center hidden col-span-2 lg:flex list-none gap-5 font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `underline decoration-secondary   decoration-4 underline-offset-8`
                    : "hover:text-hoverText"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  isActive
                    ? " underline decoration-secondary decoration-4 underline-offset-8"
                    : "hover:text-hoverText"
                }
              >
                Brands
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addProduct"
                className={({ isActive }) =>
                  isActive
                    ? " underline decoration-secondary decoration-4 underline-offset-8"
                    : "hover:text-hoverText"
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
                    : "hover:text-hoverText"
                }
              >
                My Cart
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive
                    ? " underline decoration-secondary decoration-4 underline-offset-8"
                    : "hover:text-hoverText"
                }
              >
                Faq
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? " underline decoration-secondary decoration-4 underline-offset-8"
                    : "hover:text-hoverText"
                }
              >
                Register
              </NavLink>
            </li>
          </div>
          <div className="hidden lg:flex gap-3 justify-center items-center">
            {user && (
              <div className="flex items-center gap-2 justify-center mx-2">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    className="w-10 h-10 rounded-full select-none"
                    alt="user photo"
                  />
                ) : (
                  <img
                    src={userProfile}
                    className="w-10 h-10 rounded-full select-none"
                    alt="user photo"
                  />
                )}
                <h3 className="text-black text-sm text-center mt-1">
                  {user?.displayName}
                </h3>
              </div>
            )}
            {user && (
              <Link
                to="/login"
                onClick={handleLogout}
                className="btn bg-secondary hover:bg-hoverText text-white"
              >
                Log out
              </Link>
            )}
            {!user && (
              <Link
                to="/login"
                className="btn bg-secondary hover:bg-hoverText text-white"
              >
                Login
              </Link>
            )}
            {showPass ? (
              <FaSun
                className="text-2xl"
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <FaMoon
                className="text-2xl"
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </div>
        </div>
        <ul
          className={`flex flex-col justify-center items-center font-bold text-lg  text-white z-10   gap-4 px-8 py-6 pb-12 bg-secondary w-full absolute duration-700 all ${
            open ? "top-16" : "top-[-800px]"
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
              to="/brands"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : "hover:text-hoverText"
              }
            >
              Brands
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
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : "hover:text-hoverText"
              }
            >
              Faq
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
         {
          !user && <img
          src={userProfile}
          className="w-10 h-10 rounded-full select-none"
          alt="user photo"
        />
         }
          
          <li >
          {user && (
              <div className="flex items-center gap-2 justify-center mx-2">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    className="w-10 h-10 rounded-full select-none"
                    alt="user photo"
                  />
                ) : (
                  <img
                    src={userProfile}
                    className="w-10 h-10 rounded-full select-none"
                    alt="user photo"
                  />
                )}
                <h3 className="text-white text-sm text-center">
                  {user?.displayName}
                </h3>
              </div>
            )}
            </li>
            <li onClick={() => setOpen(!open)}>
            {user && (
              <Link
                to="/login"
                onClick={handleLogout}
                className="btn bg-white hover:bg-black text-black"
              >
                Log out
              </Link>
            )}
            {!user && (
              <Link
                to="/login"
                className="btn  bg-white hover:bg-black text-black"
              >
                Login
              </Link>
            )}
           </li>
           <li>
            {showPass ? (
              <FaSun
                className="text-2xl"
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <FaMoon
                className="text-2xl"
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
