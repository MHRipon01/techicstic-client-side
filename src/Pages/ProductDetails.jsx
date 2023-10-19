import { useLoaderData } from "react-router-dom";

import { AiTwotoneStar } from "react-icons/ai";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);

  return (
    <div>
      check
      <div className="p-3">
        <div className="card p-5 border card-compact mx-auto mb-28  bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-3/4 max-h-[90vh] p-4"
              src={productDetails.photo}
              alt="Shoes"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title text-3xl font-semibold">
              {productDetails.name}
            </h2>
            <p className="text-xl font-medium">{productDetails.description}</p>

            <h3 className="text-2xl font-normal">
              Brand: {productDetails.category}
            </h3>

            <div>
              <h3 className="flex gap-3">
                {" "}
                <div className="w-fit text-4xl font-bold text-yellow-400">
                  <AiTwotoneStar></AiTwotoneStar>
                </div>{" "}
                <div className="text-3xl font-semibold w-fit">
                  {productDetails.rating}
                </div>
              </h3>

              <p className="text-xl font-semibold  ">
                Price: {productDetails.price}
              </p>
              <button className="p-3 m-4 bg-[#e8fbf4] border hover:border-purple-500 rounded-lg text-xl font-bold hover:bg-sky-300">
                Add To Cart 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
