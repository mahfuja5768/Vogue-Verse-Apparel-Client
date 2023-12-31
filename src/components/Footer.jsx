import { FaFacebookF, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logoName.png";
import { FaPhone } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-lightPrimary border-t px-8 mt-12">
      <footer>
        <div className="hero  ">
          <div className=" max-w-[1280px] mx-auto py-12 md:py-16  grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:grid-cols-2">
              <div className="flex flex-col gap-3 ">
                <Link to='/'><img src={logo} alt="" className="mb-3 bg-white w-52 h-24" /></Link>
                <Marquee speed={40}>
                  <h3 className="ms-5">QUESTION OR FEEDBACK?</h3>
                </Marquee>
                <Marquee speed={40}>
                  <p className="flex items-center gap-2 ms-5">
                    <FaPhone className="text-lg"></FaPhone>{" "}
                    <span>+099 222 111</span>
                  </p>
                </Marquee>
                <Marquee speed={40}>
                  <p className="flex items-center gap-2 ms-5">
                    <FaMailBulk className="text-lg"></FaMailBulk>{" "}
                    <span>@vogueverseapparel.com</span>
                  </p>
                </Marquee>
              </div>
            </div>

            <nav className="md:grid-cols-1">
              <header className="font-bold text-2xl text-  text-start md:text-center">
                Social links
              </header>
              <div className="flex justify-start md:justify-center gap-12 my-6">
                <a
                  href="https://www.facebook.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaFacebookF className="text-xl "></FaFacebookF>
                </a>
                <a
                  href="https://www.dribbble.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaLinkedin className="text-xl"></FaLinkedin>
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaTwitter className="text-xl"></FaTwitter>
                </a>
              </div>
            </nav>

            <div className="md:grid-cols-1">
              <nav className="flex flex-col ">
                <header className="font-bold text-2xl  mb-2">Quick Menu</header>
                <Link to="/" className="link link-hover ps-1 pb-3 font-medium">
                  Home
                </Link>
                <Link
                  to="/addProduct"
                  className="link link-hover ps-1 pb-3 font-medium"
                >
                  Add Product
                </Link>
                <Link
                  to="/myCart"
                  className="link link-hover ps-1 pb-3 font-medium"
                >
                  My Cart
                </Link>

                <Link
                  className="link link-hover ps-1 pb-3 font-medium "
                  to="/register"
                >
                  Register
                </Link>
                <Link className="link link-hover ps-1 font-medium" to="/login">
                  Login
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className=" flex  justify-center text-center items-center flex-end  py-3 px-3">
          <p>
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            Here.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
