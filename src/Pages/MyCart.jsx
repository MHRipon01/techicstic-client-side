import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const MyCart = () => {
  const detailedProduct = useLoaderData();
  console.log(detailedProduct);

  return (
    <div className="lg:flex  justify-center">
        <div className="lg:flex lg:flex-grow lg:justify-between  lg:max-w-[50vw]  ">
      <div className=" shadow-2xl first-letter: first-letter: ">
        {detailedProduct.map((product) => (
          <div key={product.id}>
            <div className="mt-5 shadow-xl">
              <div className="flex ">
                <input type="radio" className="w-5 ml-3" name="" id="" />
                <div>
                  <img
                    className="max-h-36 lg:max-h-[40vh] ml-3 m-3"
                    src={product.photo}
                    alt=""
                  />
                </div>
                <div className="text-center lg:mt-14 items-center ">
                  <h3 className="font-medium pt-5">{product.name}</h3>
                  <h2 className="border w-fit m-2 text-[#757e7b] border-gray-200">
                    techIstic verified
                  </h2>
                  <h3>{product.price} </h3>
                  <button className="text-3xl font-semibold text-red-500"><AiFillDelete></AiFillDelete> </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
                <div className="bg-gray-100 flex justify-between py-10 rounded-lg flex-grow  items-center lg:h-[50vh] lg:ml-6 lg:p-6 w-full">
                        <div className="flex gap-2  ">
                            <input type="radio" name="" className="w-5 ml-3" id="" />
                            <p className="flex lg:mr-7 items-center">All</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="gap-2">
                                <p>Delivery: $0</p>
                                <p className="font-medium">Total:$0</p>
                            </div>
                            <button className="bg-[#7cf5cd] font-medium py-2 px-3 rounded-xl">Check Out(0)</button>
                        </div>
                    </div>
            </div>
    </div>
    </div>
  );
};

export default MyCart;
