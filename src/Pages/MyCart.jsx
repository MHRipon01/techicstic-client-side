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
  // const [cart, setCart] = useState();

  //   useEffect(() => {
  //     fetch(`http://localhost:5173/cartedProduct/${params.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setCart(data);
  //       });
  //   }, []);
  // console.log(cart);

  // const {_id,name} = detailedProduct;
  // console.log(name);
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
        fetch(`http://localhost:5000/cartedProduct/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Product has been deleted from the cart.",
                "success"
              );
              const remainingProduct = cartProduct.filter((singleProduct) =>singleProduct._id != _id
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

          {/* {detailedProduct.map((product) => (
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
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-3xl font-semibold text-red-500"
                    >
                      <AiFillDelete></AiFillDelete>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))} //akhne */}
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
