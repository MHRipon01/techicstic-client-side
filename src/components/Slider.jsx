const Slider = ({ product }) => {
  console.log(product[0].photo);
  return (
    <div>
      <div>
        <div className="carousel  w-[90vw] overflow-x-hidden">
          <div id="item1" className="carousel-item grid md:flex  w-full  h-full ">
            <img src={`${product[0].photo}`} className="w-[90vw] border-2" />
            <h3 className="text-4xl font-bold text-sky-300 w-full flex  justify-center text-center border-2 items-center border-purple-600">
              Get Your product now!
            </h3>
          </div>
          <div id="item2" className="carousel-item grid md:flex w-full  h-full ">
            <img src={`${product[1].photo}`} className="w-[90vw] border-2" />
            <h3 className="text-4xl font-bold text-sky-300 w-full flex  justify-center text-center border-2 items-center border-purple-600">
              Get Your product now!
            </h3>
          </div>
          <div id="item3" className="carousel-item grid md:flex w-full  h-full ">
            <img src={`${product[2].photo}`} className="w-[90vw] border-2" />
            <h3 className="text-4xl font-bold text-sky-300 w-full flex  justify-center text-center border-2 items-center border-purple-600">
              Get Your product now!
            </h3>
          </div>
          <div id="item4" className="carousel-item grid md:flex w-full  flex justify-center h-full ">
            <img src={`${product[2].photo}`} className="w-[90vw] border-2" />
            <h3 className="text-4xl font-bold text-sky-300 w-full flex  justify-center text-center border-2 items-center border-purple-600">
              Get Your product now!
            </h3>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
