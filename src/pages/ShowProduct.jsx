import { FaEye, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShowProduct = ({ product }) => {
  // console.log(product);
  const { brandName, description, image, name, price, rating, type, _id } =
    product;
  return (
      <div className=" h-[640px] space-y-1 text-black bg-gradient-to-t from-lightPrimary to-[#fafaf9]  shadow-lg  rounded-3xl text-start mb-5">
        <div>
          <img
            src={image}
            alt=""
            className="w-full h-[210px]  rounded-t-2xl "
          />
        </div>
        <div className="p-5">
        <h2 className="text-xl font-semibold">Product Name: {name}</h2>
        <h2 className="text-xl font-semibold">Brand Name: {brandName}</h2>
        <p className="text-lg ">Type: {type}</p>
        {description.length > 100 ? (
          <p className="text-lg ">
            <span className="font-medium"> Description:</span>{" "}
            {description.slice(0, 100)}...
          </p>
        ) : (
          <p className="text-lg ">
            <span className="font-medium"> Description:</span> {description}
          </p>
        )}

        <div className="flex  gap-4 my-2">
          <p className="text-lg font-semibold">Rating: {rating}</p>
          <p className="text-lg font-semibold">Price: ${price}</p>
        </div>

        <div className="flex justify-between flex-col">
          <Link to={`/productDetails/${_id}`}>
            <button className="btn bg-secondary border-none my-2 w-full hover:bg-hoverText text-white">
              <span className="me-1">
                <FaEye></FaEye>
              </span>
              Show details
            </button>
          </Link>
          <Link to={`/updateProduct/${_id}`}>
          <button  className="btn bg-secondary border-none my-2 w-full  hover:bg-hoverText text-white">
            <span>
              <FaPen></FaPen>
            </span>
            <span className="ms-1"> Update</span>
          </button>
          </Link>
        </div>
        </div>
      </div>
  );
};

export default ShowProduct;
