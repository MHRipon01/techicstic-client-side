import { useLoaderData, useLocation } from "react-router-dom";


const BrandDetails = ({filteredData}) => {

    const details = filteredData


    // const location = useLocation();
// const filteredData = location.state ? location.state.filteredData : [];

    console.log(details);
    // const products = useLoaderData()

// console.log(products);
    return (
        <div>
      details

      {/* {details.map((item) => (
        <div key={item._id}>
          <h2>{item.category}</h2>
          <p>{item.description}</p>
          <img src={item.photo} alt="" />
        </div>
      ))} */}
    </div>
    );
};

export default BrandDetails;