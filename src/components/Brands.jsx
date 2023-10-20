import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch(
      "https://vogue-verse-apparel-server-glzxxnigl-mahfuja5768.vercel.app/brands"
    )
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, [brands]);

  return (
    <div className="my-24 px-4 max-w-[1280px] mx-auto">
      <div className="text-center">
        <h2 className="text-4xl text-secondary font-bold mb-4">
          Discover Renowned Brands
        </h2>
        <p className=" text-justify">
          Vogue-Verse Apparel is proud to feature a curated selection of some of
          the most iconic and trusted fashion brands in the industry. Explore a
          world of elegance and fashion excellence from renowned labels known
          for their quality and style. From timeless classics to avant-garde
          designs, our brand collection is a testament to our commitment to
          offering the very best in the world of fashion.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 my-16">
        {brands.map((brand) => (
          <Brand key={brand._id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
