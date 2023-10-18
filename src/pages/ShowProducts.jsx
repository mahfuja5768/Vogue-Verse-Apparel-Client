import { useEffect, useState } from "react";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/brandsProduct")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data);
      });
  }, []);

  return <div></div>;
};

export default ShowProducts;
