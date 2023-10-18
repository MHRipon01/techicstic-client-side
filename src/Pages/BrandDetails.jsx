import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";


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

  fetch(`http://localhost:5000/product/${brand}`,{
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
    
  }).then(res => res.json())
  .then(data => {
    console.log(data);
  })


    return (
        <div>
      details

      {
        product.map(tech => 
         // eslint-disable-next-line react/jsx-key
         <h2> {
          tech.category
          
        }
        {
          tech.name 
        } 
        <img src={tech.photo} alt="" />
        </h2>
        )

      }
    </div>
    );
};

export default BrandDetails;