import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowProduct from "./ShowProduct";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const [advertiseBrand, setAdvertiseBrand] = useState([]);

  const { brandName } = useParams();
  const selectedBrand = brandName;
  // console.log(selectedBrand);

  useEffect(() => {
    fetch(
      `https://vogue-verse-apparel-server-glzxxnigl-mahfuja5768.vercel.app/brandsProduct/${selectedBrand}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [selectedBrand]);

  useEffect(() => {
    fetch(
      "https://vogue-verse-apparel-server-glzxxnigl-mahfuja5768.vercel.app/brands"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const advertiseBrand = data.find(
          (add) => add.brandName === selectedBrand
        );
        // console.log(data)
        setAdvertiseBrand(advertiseBrand);
      });
  }, [selectedBrand]);

  return (
    <div className="my-24 px-4 max-w-[1280px] mx-auto">
      {!products.length ? (
        <div className="flex flex-col justify-center items-center gap-5 relative">
          <img
            src={"https://i.ibb.co/YytgHf5/empty.gif"}
            className="h-[400px]"
            alt=""
          />
          <h2 className="md:text-3xl text-2xl absolute text-secondary top-12 font-bold text-center">
            Sorry, there are currently no products available.
          </h2>
        </div>
      ) : (
        <>
          <div className="carousel w-full h-[300px] md:h-[400px]">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={advertiseBrand?.advertisementImage1}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src={advertiseBrand?.advertisementImage2}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src={advertiseBrand?.advertisementImage3}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="text-center text-4xl text-secondary font-bold mb-4">
              Explore Our Latest Collections of {selectedBrand}
            </h2>
            <p className=" text-justify">
              Step into the world of fashion with Vogue-Verse Apparel. Our
              latest collections are designed to inspire and elevate your style.
              Whether you're searching for everyday essentials or statement
              pieces for special occasions, you'll find a diverse range of
              clothing, shoes, and accessories to meet your fashion needs.
              Discover the perfect outfit and accessories to express your unique
              style and embrace the latest fashion trends.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 my-16">
            {products.map((product) => (
              <ShowProduct key={product._id} product={product}></ShowProduct>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowProducts;
