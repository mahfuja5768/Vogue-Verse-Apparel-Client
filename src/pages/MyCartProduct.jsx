import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCartProduct = ({ product, setMyAddedProducts, myAddedProducts }) => {
  // console.log(product)
  const { brandName, description, image, name, price, rating, type, _id } =
    product;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://vogue-verse-apparel-server-mdr7fjq0n-mahfuja5768.vercel.app/addProduct/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Product has been deleted.", "success");
              // console.log(data);
              const remaining = myAddedProducts.filter(
                (coffee) => coffee._id !== _id
              );
              const newArr = [...remaining];
              setMyAddedProducts(newArr);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className=" h-[660px]  bg-gradient-to-t from-lightPrimary to-[#fafaf9]  shadow-lg rounded-3xl text-start mb-5 flex flex-col space-y-5 text-black">
        <div className="border rounded-t-3xl border-lightPrimary mb-2 ">
          <img
            src={image}
            alt=""
            className="w-full  h-[210px] rounded-t-3xl "
          />
        </div>
        <div className="p-5">
          <h2 className="text-xl font-semibold">Product Name: {name}</h2>
          <h2 className="text-xl font-semibold">Brand Name: {brandName}</h2>
          <p className="text-lg ">Type: {type}</p>
          <p className="text-lg ">
            <span className="font-medium"> Description:</span> {description}
          </p>

          <div className="flex  gap-4 my-2">
            <p className="text-lg font-semibold">Rating: {rating}</p>
            <p className="text-lg font-semibold">Price: ${price}</p>
          </div>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-secondary my-2 w-full border-none hover:bg-hoverText text-white"
          >
            <span>
              <FaTrash></FaTrash>
            </span>
            <span className="ms-1">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCartProduct;
