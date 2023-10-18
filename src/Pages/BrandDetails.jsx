import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Slider from "../components/Slider";
// import BrandDetailsCard from "../components/BrandDetailsCard";


const BrandDetails = ({brand}) => {
 const product = useLoaderData()
 console.log(product);




//  const { _id, name,  details, category,brand, photo } = product;

// console.log(category ,brand);

  // http://localhost:5000/product/Apple
// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/product/${product.category}`);
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, [product.brand]);

  // fetch(`http://localhost:5000/product/${brand}`,{
  //   method: 'GET',
  //   headers: {
  //     'content-type': 'application/json'
  //   }
    
  // }).then(res => res.json())
  // .then(data => {
  //   // console.log(data);
  // })
 
       if(product.length == 0){
          return <div> <Slider></Slider> <h2 className="w-full flex justify-center items-center text-4xl font-semibold text-purple-400 min-h-[100vh] border-2 border-red-600  bg-gray-100">Sorry! There is no data for this brand. </h2>  </div>
        }

    return (
        <div className="bg-gray-100 min-h-[100vh] w-screen  border-2 border-red-700">
      details
      <div>
        
           <Slider key={product.id} product={product} ></Slider>
        
        
      </div>
       
      <div className="grid md:grid-cols-2">
      {
        product.map(tech => 
         // eslint-disable-next-line react/jsx-key
         <div className="flex flex-col h-full">
          <div className=" grid m-4 md:grid-cols-3 border-2 border-red-600 ">
          <h2 className=" border-2  border-blue-500"> 
            <div  className="   border-2 border-purple-600">
            <div className="relative   rounded-xl bg-red-300 ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl   bg-clip-border text-gray-700">
            <div className="h-full">
            <img 
              src={tech.photo}
              alt="image"
              className="h-full w-full object-cover"
            />
            </div>
          </div>
          <div className="p-6">
            <h4
              id="card-title"
              className="mb-2 block  text-3xl font-Cormorant font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              {tech.category}
            </h4>
           
            
            
            
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
        )

      }
      </div>
    </div>
    );
};

export default BrandDetails;