import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Link, useLoaderData } from "react-router-dom";
import BrandDetails from "./BrandDetails";
import BrandCard from "../components/BrandCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const products = useLoaderData();

  // useEffect(() => {
  //   setData(products);
  // }, [products]);

  const findData = (category) => {
    // Filter data by category
    const newFilteredData = data.filter((item) => item.category === category);
    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  // const categoryName = products.map(item => item.category)
  // console.log(categoryName);

  return (
    <div>
      <Banner></Banner>
      Home check
      {products.length}

      {
        data.map(brand => (
          <BrandCard key={brand.id} data={data} brand={brand}></BrandCard>
        ))
      }


      
      <Link to={{ pathname: `/details/${data.brand}` }}>
        <button className="p-4 m-3 bg-gray-800 text-white">
          Filter Data by Apple
        </button>
      </Link>
      <br />
      <Link to={{ pathname: `/details/brand` }}>
        <button
          className="p-4 m-3 bg-gray-800 text-white"
          onClick={() => findData("Samsung")}
        >
          Filter Data by Samsung
        </button>{" "}
      </Link>
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
      <Link to={{ pathname: "/details" }}>
        <button
          className="p-4 m-3 bg-gray-800 text-white"
          onClick={() => findData("Nokia")}
        >
          Filter Data by Nokia
        </button>
      </Link>
      <br />
      {filteredData.map((item) => (
        <BrandDetails
          key={item._id}
          products={products}
          setFilteredData={setFilteredData}
          filteredData={filteredData}
        ></BrandDetails>
      ))}
    </div>
  );
};

export default Home;
