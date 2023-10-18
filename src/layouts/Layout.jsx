import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";

const Layout = () => {
  return (
    <div className=" lg:grid lg:grid-cols-5 gap-2 ">
      <div className="lg:hidden block">
        <Navbar></Navbar>
      </div>
      <div className="lg:block hidden">
        <SideNav></SideNav>
      </div>
      <div className="lg:col-span-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
