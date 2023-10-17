import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Link, useLoaderData } from "react-router-dom";
import BrandDetails from "./BrandDetails";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  //   const [category, setCategory] = useState("");
  const products = useLoaderData();
  //   console.log(data);
  //   console.log(products);

  useEffect(() => {
    setData(products);
  }, [products]);
//   if (data && data.length > 0) {
//     data.map((item) => console.log(item.category));
//   }

  //   console.log(products);
//   const findData = (category) => {
//     // Filter data by category
//     const filteredData = data.filter((item) => item.category === category);
//     setData(filteredData);
//   };
  const findData = (category) => {
    // Filter data by category
    const newFilteredData = data.filter((item) => item.category === category);
    setFilteredData(newFilteredData);
  };

  return (
    <div>
      <Banner></Banner>
      Home check
      {products.length}
      <Link to={{ pathname: '/details', state: { filteredData } }}>
        <button className="p-4 m-3 bg-gray-800 text-white" onClick={() => findData("Apple")}>
          Filter Data by Apple
        </button>
      </Link>
      <br />
      <button
        className="p-4 m-3 bg-gray-800 text-white"
        onClick={() => findData("Samsung")}
      >
        Filter Data by Samsung
      </button>{" "}
      <br />
      <button
        className="p-4 m-3 bg-gray-800 text-white"
        onClick={() => findData("Google")}
      >
        Filter Data by Google
      </button>{" "}
      <br />
      <button
        className="p-4 m-3 bg-gray-800 text-white"
        onClick={() => findData("Microsoft")}
      >
        Filter Data by Microsoft
      </button>{" "}
      <br />
      <button
        className="p-4 m-3 bg-gray-800 text-white"
        onClick={() => findData("Xiaomi")}
      >
        Filter Data by Xiaomi{" "}
      </button>{" "}
      <br />
      <Link to={{ pathname: '/details', state: { filteredData } }}>
        <button className="p-4 m-3 bg-gray-800 text-white" onClick={() => findData("Nokia")}>
          Filter Data by Nokia
        </button>
      </Link>
      <br />

       {filteredData.map((item) => (
        <BrandDetails key={item._id} products={products} setFilteredData={setFilteredData}  filteredData={filteredData}></BrandDetails>
      ))}

 
    </div>
  );
};

export default Home;
