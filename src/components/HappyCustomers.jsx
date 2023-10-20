import React from "react";

const HappyCustomers = () => {
  return (
    <div className="my-12 max-w-[1280px] mx-auto px-4">
      <div className="flex justify-center items-center flex-col">
        <h2 className="md:text-4xl text-2xl font-bold my-8">
          Happy Customers, Happy Us
        </h2>

        <p>
          At Vogue-Verse-Apparel, our mission is to provide our customers with a
          delightful shopping experience that extends beyond just acquiring
          clothing. We take immense pride in our ability to bring joy and
          satisfaction to the faces of our valued customers. Their happiness is
          our ultimate reward, and we strive to go the extra mile to achieve it.
          Our dedicated team is committed to delivering not only stylish and
          high-quality clothing but also top-notch customer service. We believe
          that happy customers are the foundation of our success, and we're
          thrilled to have a community of fashion enthusiasts who have chosen us
          as their go-to destination for all their apparel needs. We're grateful
          for the trust and loyalty our customers have shown, and their positive
          feedback and smiles are a testament to our continuous efforts to make
          Vogue-Verse-Apparel a place where fashion meets happiness. Thank you
          for being a part of our journey, and we look forward to keeping those
          smiles coming with each and every purchase.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
        <img className="rounded" src={"https://i.ibb.co/c69Cn5R/a6.jpg"} alt="" />
        <img className="rounded" src={"https://i.ibb.co/GVHDMnD/a5.jpg"} alt="" />
        <img className="rounded" src={"https://i.ibb.co/jzwDVF6/a4.jpg"} alt="" />
        <img className="rounded" src={"https://i.ibb.co/nsgDfrd/a3.png"} alt="" />
        <img className="rounded" src={"https://i.ibb.co/wRvnhZ9/a2.jpg"} alt="" />
        <img className="rounded" src={"https://i.ibb.co/mzRc7hL/a1.webp"} alt="" />
      </div>
    </div>
  );
};

export default HappyCustomers;
