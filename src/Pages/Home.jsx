import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Link, useLoaderData } from "react-router-dom";
import BrandDetails from "./BrandDetails";
import BrandCard from "../components/BrandCard";
import Footer from "../components/Footer";
import RecentSoldItems from "../components/RecentSoldItems";
import NewArrivals from "../components/NewArrivals";

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
// const [theme , setTheme] =useState("light")

// const toggleTheme = () =>{
//   setTheme((current) => (current === "light" ? "dark" : "light"))
// }



return (
    <div >
      <button >Change Theme </button>
      <Banner></Banner>
      Home check
      {products.length}
      <RecentSoldItems></RecentSoldItems>
      <div className="w-[95%] ml-2.5 lg:ml-10  h-full gap-x-3   grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((brand) => (
          <BrandCard key={brand.id} data={data} brand={brand}></BrandCard>
        ))}
      </div>
      <NewArrivals></NewArrivals>
      <Footer></Footer>
    </div>
  );
};

export default Home;
