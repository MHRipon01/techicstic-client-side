import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import CartProduct from "../components/CartProduct";

const MyCart = ({ params }) => {
  const detailedProduct = useLoaderData();
  console.log(detailedProduct);

  const email = useContext(AuthContext);

  console.log(email);
  
  const _id = detailedProduct._id;
  console.log(_id);

  const [cartProduct, setCartProduct] = useState(detailedProduct);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://techistic-server-8kovry9lx-md-mehedi-hasan-ripons-projects.vercel.app/cartedProduct/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // if (data.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "Product has been deleted from the cart.",
              "success"
            );
            const remainingProduct = cartProduct.filter(
              (singleProduct) => singleProduct._id != _id
            );
            console.log(remainingProduct);
            setCartProduct(remainingProduct);
            // }
          });
      }
    });
  };

  return (
    <div className="lg:flex  justify-center">
      <div className="lg:flex lg:flex-grow lg:justify-between  lg:max-w-[50vw]  ">
        <div className=" shadow-2xl first-letter: first-letter: ">
          {cartProduct.map((product) => (
            <CartProduct
              key={product._id}
              product={product}
              handleDelete={handleDelete}
            ></CartProduct>
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
              <button className="bg-[#7cf5cd] font-medium py-2 px-3 rounded-xl">
                Check Out(0)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
