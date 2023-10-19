import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  const productId = id;
  useEffect(() => {
    fetch(`http://localhost:5000/single-product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0].brandName);
        setProduct(data[0]);
      });
  }, [productId]);

  const handleToMyCart = (id) => {
    console.log(id);

    const name = product.name;
    const brandName = product.brandName;
    const type = product.type;
    const price = product.price;
    const rating = product.rating;
    const description = product.description;
    const image = product.image;
    const addProduct = {
      name,
      brandName,
      type,
      price,
      description,
      rating,
      image,
    };
    console.log(addProduct);

    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Product added to your cart successfully!",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className="max-w-[1280px] mx-auto my-20">
      <div className="md:grid md:grid-cols-4 gap-5 items-center">
        <div className="flex md:col-span-2">
          <img
            src={product.image}
            alt=""
            className="w-full h-[300px] mb-5  p-2 rounded-3xl "
          />
        </div>
        <div className=" p-5">
          <h2 className="text-xl font-semibold bg-hoverText text-white rounded-lg mb-2 p-3">
            Product Name: {product.name}
          </h2>
          <h2 className="text-xl font-semibold bg-hoverText text-white rounded-lg mb-2 p-3">
            Brand Name: {product.brandName}
          </h2>
          <p className="text-lg  bg-hoverText text-white rounded-lg mb-2 p-3">
            Type: {product.type}
          </p>

          <p className="text-lg bg-hoverText text-white rounded-lg mb-2 p-3 ">
            <span className="font-medium"> Description:</span>{" "}
            {product.description}
          </p>

          <div className="flex  gap-4 my-2 bg-hoverText text-white rounded-lg mb-2 p-3">
            <p className="text-lg font-semibold">Rating: {product.rating}</p>
            <p className="text-lg font-semibold">Price: {product.price}</p>
          </div>
          <button
            onClick={() => handleToMyCart(product._id)}
            className="btn bg-secondary my-2 w-full  hover:bg-hoverText text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
