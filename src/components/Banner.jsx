import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-b from-lightPrimary hero min-h-[400px]  ">
        <div className="hero-content max-w-[1280px] mx-auto py-12 px-4  text-start  flex gap-6 justify-between flex-col-reverse md:flex-row ">
          <div>
            <h1 className="text-xl font-semibold">Welcome To,</h1>
            <h1 className="mb-5 text-4xl lg:text-5xl font-bold">
              Vogue-Verse-Apparel
            </h1>
            <p className="mb-5 text-justify">
              Your Ultimate Destination for Fashion and Style. Explore the
              Latest Styles and Discover Your Signature Look. Your Fashion
              Journey Begins Here
            </p>
            <Link to="/brands">
              <button className="btn bg-secondary hover:bg-hoverText border-none text-white ">
                Shop Now
              </button>
            </Link>
          </div>
          <div>
            <img
              src={`https://i.ibb.co/tPPfF2f/fashion-1308-40546-removebg-preview.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
