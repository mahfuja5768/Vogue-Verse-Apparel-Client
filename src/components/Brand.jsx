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
      <div className="bg-gradient-to-t from-yellow-100 shadow-lg p-5 rounded-3xl text-center mb-5">
        <div className="-mt-12">
          <img
            src={brand.brandImage}
            alt=""
            className="w-full h-[180px]  p-2 rounded-3xl "
          />
        </div>
        <h2 className="text-xl py-2 font-semibold">
          Brand Name: {brand.brandName}
        </h2>
        <button onClick={()=>{handleBrandProducts(brand.brandName)}} className="btn bg-secondary my-2  hover:bg-hoverText text-white">
          Visit Now
        </button>
      </div>
    </div>
  );
};

export default Brand;
