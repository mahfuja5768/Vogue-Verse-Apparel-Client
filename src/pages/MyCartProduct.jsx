

const MyCartProduct = ({product}) => {
    // console.log(product)
    const { brandName, description, image, name, price, rating, type, _id } =
    product;

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
          <p className="text-lg font-semibold">Price: {price}</p>
        </div>
      </div>
        </div>
    );
};

export default MyCartProduct;