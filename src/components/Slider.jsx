const Slider = ({ product }) => {
  console.log(product[0].photo);
  return (
    <div>
      <div>
        <div className="carousel  w-[90vw] h-[30vw] ">
          <div id="item1" className="carousel-item grid md:flex  w-full  h-full ">
            <img src={`${product[0].photo}`} className="w-[30vw]" />
            <h3 className="text-4xl font-bold text-sky-300 w-full flex  justify-center text-center   items-center ">
             <div>
             <p className="text-purple-400">30% flat discount</p>
              <br />
             <p> Get Your product now!!!</p>
             </div>
            </h3>
          </div>
          <div id="item2" className="carousel-item grid md:flex w-full  h-full ">
            <img src={`${product[1].photo}`} className="w-[90vw] " />
            <h3 className="text-4xl font-bold text-sky-300 w-full flex  justify-center text-center  items-center ">
             <div>
             <p className="text-purple-400">Everything you need</p>
              <br />
             <p> We have it!!</p>
             </div>
            </h3>
          </div>
          <div id="item3" className="carousel-item grid md:flex w-full  h-full ">
            <img src={`${product[2].photo}`} className="w-[90vw] " />
            <h3 className="text-4xl font-bold text-sky-300 w-full flex  justify-center text-center   items-center ">
             <div>
             <p className="text-purple-400">Quality You Can Trust.</p>
              <br />
             <p> 7 days money back warranty</p>
             </div>
            </h3>
          </div>
          <div id="item4" className="carousel-item grid md:flex w-full   justify-center h-full ">
            <img src={`${product[3].photo}`} className="w-[90vw] " />
            <h3 className="text-4xl font-bold text-sky-300 w-full flex  justify-center text-center   items-center  ">
             <div>
             <p className="text-purple-400">Invest for a Brighter Tomorrow.</p>
              <br />
             <p> 40% discount on student items</p>
             </div>
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
