import { Link } from "react-router-dom";


const BrandCard = ({brand}) => {
    



    return (
        <div className=" flex flex-col  gap-x-3  ">
            
       <Link  to={`/details/${brand.brand}`}>
       <div
          className="card    from-white to-white  bg-gradient-to-tl hover:from-[#afe4ec]  hover:to-[#f2f4f5] duration-1000    shadow-2xl mt-11 "
        
        >
          <figure className="h-96  p-3">
            <img src={brand.imgUrl} alt="Shoes" className="rounded-xl  h-fit w-fit " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 id="" className="card-title font-Crimson text-3xl font-bold">
              {brand.brand}
            </h2>
           
            <div className="card-actions">
            
            </div>
          </div>
        </div>
     
       </Link>
        </div>
    );
};

export default BrandCard;