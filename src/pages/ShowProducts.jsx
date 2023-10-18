import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowProduct from "./ShowProduct";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  const { brandName } = useParams();
  const selectedBrand = brandName;
  console.log(selectedBrand);

  useEffect(() => {
    fetch(`http://localhost:5000/brandsProduct/${selectedBrand}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [selectedBrand]);

  return (
    <div className="my-24 px-4">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-4xl text-secondary font-bold mb-4">
          Explore Our Latest Collections of {selectedBrand}
        </h2>
        <p className=" text-justify">
          Step into the world of fashion with Vogue-Verse Apparel. Our latest
          collections are designed to inspire and elevate your style. Whether
          you're searching for everyday essentials or statement pieces for
          special occasions, you'll find a diverse range of clothing, shoes, and
          accessories to meet your fashion needs. Discover the perfect outfit
          and accessories to express your unique style and embrace the latest
          fashion trends.
        </p>
      </div>
      {
        !products.length ? 
        <h2>Sorry</h2>
        :
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 my-16">
        {products.map((product) => (
          <ShowProduct key={product._id} product={product}></ShowProduct>
        ))}
      </div>
      }
    </div>
  );
};

export default ShowProducts;
