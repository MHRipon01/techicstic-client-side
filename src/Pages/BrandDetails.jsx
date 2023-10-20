import { useEffect } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import Slider from "../components/Slider";
// import BrandDetailsCard from "../components/BrandDetailsCard";
import { AiTwotoneStar } from "react-icons/ai";
import ProductDetails from "./ProductDetails";
const BrandDetails = ({ brand }) => {
  const product = useLoaderData();
  // console.log(product[1]._id);

  //  const { _id, name,  details, category,brand, photo } = product;

  // console.log(category ,brand);

  // http://localhost:5173/product/Apple
  // useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(`http://localhost:5173/product/${product.category}`);
  //         const data = await response.json();
  //         console.log(data);
  //       } catch (error) {
  //         console.error("Error fetching data: ", error);
  //       }
  //     };

  //     fetchData();
  //   }, [product.brand]);

  // fetch(`http://localhost:5173/product/${brand}`,{
  //   method: 'GET',
  //   headers: {
  //     'content-type': 'application/json'
  //   }

  // }).then(res => res.json())
  // .then(data => {
  //   // console.log(data);
  // })

  if (product.length == 0) {
    return (
      <div>
        {/* <Slider></Slider> */}
        <h2 className="w-full flex justify-center items-center text-4xl font-semibold text-purple-400 min-h-[100vh]  bg-gray-100">
          Sorry! There is no data for this brand.{" "}
        </h2>{" "}
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-[95vh] overflow-x-hidden w-[98w]  ">
      <div className="">
        <Slider key={product.id} product={product}></Slider>
      </div>
      <div className="grid md:grid-cols-2  ">
        {product.map((tech) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex  flex-col  h-full  grow ">
            <div className=" m-4   ">
              <h2 className=" ">
                <div className="   ">
                  <div className="relative   rounded-xl bg-[#D5E4DF]  m-0  shrink-0 overflow-hidden  md:flex   bg-clip-border text-gray-700">
                    <div className="h-full flex max-w-[98%]   justify-center items-center">
                      <img
                        src={tech.photo}
                        alt="image"
                        className="h-full w-full lg:w-[40vw] lg:max-h-[30vh] lg:h-60 "
                      />
                    </div>
                    <div className="w-full">
                      <div className="p-6 w-full">
                        <h4
                          id="card-title"
                          className="mb-2  block  text-3xl font-Cormorant font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                        >
                          {tech.name}
                        </h4>
                        <h3 className="text-2xl font-normal">
                          Brand: {tech.category}
                        </h3>
                        <h3 className="text-xl font-normal">
                          Type:{tech.brand}
                        </h3>

                        <h3 className="text-2xl font-normal">
                          Price:{tech.price}
                        </h3>
                        <div>
                          <h3 className="flex gap-3">
                            {" "}
                            <div className="w-fit text-4xl font-bold text-yellow-400">
                              <AiTwotoneStar></AiTwotoneStar>
                            </div>{" "}
                            <div className="text-3xl font-semibold w-fit">
                              {tech.rating}
                            </div>
                          </h3>
                        </div>
                        <div className="">
                          <Link to={`/productDetails/${tech._id}`}>
                            <button className="p-3 m-4 border hover:border-purple-500 bg-[#b4edda] rounded-lg text-xl font-bold hover:bg-sky-300">
                              Details
                            </button>
                          </Link>

                          <Link to={`/update/${tech._id}`}>
                            <button className="p-3 m-4 bg-[#b4edda] border hover:border-purple-500 rounded-lg text-xl font-bold hover:bg-sky-300">
                              Update
                            </button>
                          </Link>
                        </div>
                        {/* <h3>{tech.description}</h3> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* {
          tech.category
          
        }
        {
          tech.name 
        } 
        <img src={tech.photo} alt="" /> */}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
