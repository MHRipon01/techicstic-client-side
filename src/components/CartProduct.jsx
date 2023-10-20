import { AiFillDelete } from "react-icons/ai";


const CartProduct = ({product, handleDelete}) => {

    // const {category } = detailedProduct;
    // console.log(category);


    return (
        <div>
                  
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
          )
          
            
    
};

export default CartProduct;