import { useNavigate } from "react-router-dom";

const Brand = ({ brand }) => {
//   console.log(brand);

  const navigate = useNavigate()

  const handleBrandProducts = (brandName)=>{
    // console.log(_id)
    navigate(`/showProducts/${brandName}`)
  }

  return (
    <div>
      <div className="bg-gradient-to-t from-lightPrimary to-[#fafaf9] shadow-lg p-5 rounded-3xl text-center mb-5">
        <div className="">
          <img
            src={brand.brandImage}
            alt=""
            className="w-[150px] md:w-[200px] mx-auto h-[150px] md:h-[200px]  p-2 rounded-3xl "
          />
        </div>
        <h2 className="text-xl py-2 font-bold text-black">
          Brand Name: {brand.brandName}
        </h2>
        <button onClick={()=>{handleBrandProducts(brand.brandName)}} className="btn border-none bg-secondary my-2  hover:bg-hoverText text-white">
          Visit Now
        </button>
      </div>
    </div>
  );
};

export default Brand;
