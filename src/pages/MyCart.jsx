import { useEffect, useState } from "react";
import MyCartProduct from "./MyCartProduct";

const MyCart = () => {
  const [myAddedProducts, setMyAddedProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://vogue-verse-apparel-server-glzxxnigl-mahfuja5768.vercel.app/addProduct"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyAddedProducts(data);
      });
  }, [myAddedProducts]);

  return (
    <div className="max-w-[1280px] mx-auto my-12 px-4">
      {!myAddedProducts.length ? (
        <div className="flex flex-col justify-center items-center gap-5 relative">
          <img
            src={"https://i.ibb.co/YytgHf5/empty.gif"}
            className="h-[400px]"
            alt=""
          />
          <h2 className="md:text-3xl text-2xl absolute text-secondary top-12 font-bold text-center">
            No products have been added!
          </h2>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center my-12">
            <h2 className="text-3xl font-bold mb-3">Your Shopping Cart</h2>
            <p>
              Welcome to your shopping cart! Here you can review and manage the
              items you've added while shopping. Take your time to make sure
              everything is just the way you want it before proceeding to
              checkout. If you'd like to continue shopping, feel free to browse
              our store for more great products. Thank you for choosing us for
              your shopping needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myAddedProducts.map((product) => (
              <MyCartProduct
                key={product._id}
                product={product}
                setMyAddedProducts={setMyAddedProducts}
                myAddedProducts={myAddedProducts}
              ></MyCartProduct>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyCart;
