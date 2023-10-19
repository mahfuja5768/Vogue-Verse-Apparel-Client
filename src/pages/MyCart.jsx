import { useEffect, useState } from "react";
import MyCartProduct from "./MyCartProduct";


const MyCart = () => {

    const [myAddedProduct, setMyAddedProduct] =useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/addProduct')
        .then(res=>res.json())
        .then(data=>{ console.log(data)
            setMyAddedProduct(data)
        })
    },[])

    return (
        <div className="max-w-[1280px] mx-auto my-12">
            {
                !myAddedProduct.length ? <></>
                :
               <div>
                {
                    myAddedProduct.map(product=><MyCartProduct key={product._id} product={product}></MyCartProduct>)
                }
               </div>
            }
        </div>
    );
};

export default MyCart;