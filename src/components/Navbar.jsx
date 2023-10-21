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
  const [showIcon, setShowIcon] = useState(true);

  const { logOut, user } = useContext(AuthContext);

  const handleToggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setShowIcon(!showIcon);
  };

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
      <nav className="mb-12 shadow shadow-base">
        <div className="max-w-[1280px] mx-auto lg:grid lg:grid-cols-4 lg:gap-2 flex items-center flex-row-reverse p-4 justify-between lg:flex-row gap-6">
          <div
            onClick={() => setOpen(!open)}
            className="h-6 w-6 lg:hidden block"
          >
            {
              // open ? 'close icon' : 'open icon'
              open ? (
                <FaX className="text-2xl "></FaX>
              ) : (
                <FaBars className="text-2xl "></FaBars>
              )
            }
          </div>
          <div>
            <Link to="/">
              <img src={logo} alt="" className="lg:w-52 w-48 lg:h-16 bg-white h-14" />
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
                <h3 className=" text-sm text-center mt-1">
                  {user?.displayName}
                </h3>
              </div>
            )}
            {user && (
              <Link
                to="/login"
                onClick={handleLogout}
                className="btn bg-secondary border-none hover:bg-hoverText text-white"
              >
                Log out
              </Link>
            )}
            {!user && (
              <Link
                to="/login"
                className="btn bg-secondary border-none hover:bg-hoverText text-white"
              >
                Login
              </Link>
            )}

            <span>
              {showIcon ? (
                <FaMoon className="text-2xl cursor-pointer" onClick={handleToggleTheme} />
                ) : (
                  <FaSun className="text-2xl cursor-pointer" onClick={handleToggleTheme} />
              )}
            </span>
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
          {!user && (
            <img
              src={userProfile}
              className="w-10 h-10 rounded-full select-none"
              alt="user photo"
            />
          )}

          <li>
            {user && (
              <div className="flex flex-col items-center gap-2 justify-center mx-2">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    className="lg:w-10 lg:h-10 w-16 h-16 rounded-full select-none"
                    alt="user photo"
                  />
                ) : (
                  <img
                    src={userProfile}
                    className="w-10 h-10 rounded-full select-none"
                    alt="user photo"
                  />
                )}
                <h3 className="text-white lg:text-sm text-lg text-center">
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
                className="btn bg-white border-none text-black"
              >
                Log out
              </Link>
            )}
            {!user && (
              <Link to="/login" className="btn bg-white border-none text-black">
                Login
              </Link>
            )}
          </li>
          <li>
            {/* {showIcon ? (
              <FaSun className="text-2xl"  />
            ) : (
              <FaMoon className="text-2xl" />
            )} */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
