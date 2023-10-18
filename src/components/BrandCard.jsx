import { Link } from "react-router-dom";


const BrandCard = ({brand}) => {
    



    return (
        <div>
            
       <Link to={`/details/${brand.brand}`}>
       <div
          className="card    w-5/6 from-white to-white  bg-gradient-to-tl hover:from-[#d6b48c]  hover:to-[#f0e0ce] duration-1000    shadow-2xl mt-11 "
        
        >
          <figure className="  p-3">
            <img src={brand.imgUrl} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 id="" className="card-title font-Crimson text-3xl font-bold">
              {brand.brand}
            </h2>
            {/* <p className="text-xl  font-medium">{description}</p>
            <p className="text-xl  font-medium">Price: {price}</p> */}
            <div className="card-actions">
              {/* <Link to={`/details/${id}`}>
                {" "}
                <button className="btn  hover:bg-[#f0e0ce]">Fix a date</button>
              </Link> */}
            </div>
          </div>
        </div>
     
       </Link>
        </div>
    );
};

export default BrandCard;