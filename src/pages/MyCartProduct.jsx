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
        fetch(
          `https://vogue-verse-apparel-server-mlngrw8wo-mahfuja5768.vercel.app/addProduct/${_id}`,
          {
            method: "DELETE",
          }
        )
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
      <div className="bg-gradient-to-t from-yellow-100 shadow-lg p-5 rounded-3xl text-start mb-5">
        <div className="-mt-12">
          <img
            src={image}
            alt=""
            className="w-full h-[300px] mb-5  p-2 rounded-3xl "
          />
        </div>
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
          className="btn bg-secondary my-2 w-full  hover:bg-hoverText text-white"
        >
          <span>
            <FaTrash></FaTrash>
          </span>
          <span className="ms-1">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default MyCartProduct;
