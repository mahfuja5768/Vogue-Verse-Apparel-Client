import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [product] = useLoaderData();
  console.log(product);
  const { id } = useParams();
  const updateProductId = id;
  console.log(id);
  const { brandName, description, image, name, price, rating, type } = product;

  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const image = form.image.value;
    console.log(name);
    const newProduct = {
      name,
      brandName,
      type,
      price,
      description,
      rating,
      image,
    };
    console.log(newProduct);

    fetch(
      `https://vogue-verse-apparel-server-mlngrw8wo-mahfuja5768.vercel.app/single-product/${updateProductId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Product updated successfully!",
            icon: "success",
            confirmButtonText: "Done",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="py-0 lg:py-8">
      <div className="bg-gradient-to-b from-yellow-200 to-transparent py-8 max-w-[1280px] mx-auto px-4 lg:px-12">
        <div className="flex justify-center flex-col items-center  ">
          <h1 className="lg:text-5xl text-4xl font-bold text-center">
            Product Update Form
          </h1>
          <p className="w-full lg:w-3/4   mt-3 text-justify">
            At Vogue-Verse Apparel, we believe that fashion should be a
            reflection of individual style. Showcase your unique creations or
            gently-worn fashion pieces to a community of style enthusiasts. It's
            your opportunity to turn your wardrobe into a runway and sell your
            products.
          </p>
        </div>
        <div className="flex justify-around lg:items-center gap-6 lg:flex-row flex-col">
          <div className="w-full md:w-1/2  mx-auto">
            <img
              src={"https://i.ibb.co/tCm3kh3/add-removebg-preview.png"}
              alt=""
            />
          </div>
          <form onSubmit={handleAddProduct}>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5  gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Product Name</span>
                </label>
                <label>
                  <input
                    defaultValue={name}
                    type="text"
                    name="name"
                    placeholder="Enter product name"
                    className="input input-bordered bg-white rounded-lg w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl ">Brand Name</span>
                </label>
                <label>
                  <select
                    name="brandName"
                    className="select select-bordered"
                    defaultValue={brandName}
                  >
                    <option value="Levi's">Levi's</option>
                    <option value="H&M">H&M</option>
                    <option value="Zara">Zara</option>
                    <option value="Gucci">Gucci</option>
                    <option value="Nike">Nike</option>
                  </select>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl ">Product Type</span>
                </label>
                <label>
                  <input
                    defaultValue={type}
                    type="text"
                    name="type"
                    placeholder="Enter product type"
                    className="input input-bordered rounded-lg w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl ">Price</span>
                </label>
                <label>
                  <input
                    defaultValue={price}
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    className="input input-bordered rounded-lg w-full"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-xl ">Product Image</span>
                </label>
                <label>
                  <input
                    defaultValue={image}
                    type="text"
                    name="image"
                    placeholder="Enter product image URL"
                    className="input input-bordered rounded-lg w-full"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl ">Rating</span>
                </label>
                <label>
                  <input
                    defaultValue={rating}
                    type="text"
                    name="rating"
                    placeholder="Enter rating"
                    className="input input-bordered rounded-lg w-full"
                  />
                </label>
              </div>
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-xl ">Short description</span>
              </label>
              <label>
                <input
                  defaultValue={description}
                  type="text"
                  name="description"
                  placeholder="Enter short description"
                  className="input input-bordered rounded-lg w-full"
                />
              </label>
            </div>
            <input
              type="submit"
              className="w-full cursor-pointer hover:bg-hoverText bg-secondary text-white my-5 rounded-lg py-4 font-bold"
              value="Update Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
