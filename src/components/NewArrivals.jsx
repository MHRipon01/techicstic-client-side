const NewArrivals = () => {
  return (
    <div className="bg-gray-50 py-5 my-5 mt-24 shadow-2xl">
      <h2 className="text-3xl text-center mb-5 text-sky-400 font-semibold">
        New arrivals: The technical novelties from our range.
      </h2>
      <div className="w-full flex justify-around ">
        <div className=" lg:flex grid-cols-3 md:grid-cols-4 lg:justify-between">
          <div className="px-5">
            <img src="https://i.ibb.co/2nnnNWV/image.png" alt="" />
            <h3 className="font-medium text-lg text-center mt-2  ">Iphone 15 pro</h3>
          </div>
          <div className="px-5">
            <img src="https://i.ibb.co/svJqMj4/image.png" alt="" />
            <h3 className="font-medium text-lg text-center mt-2 ">Samsung 990 pro</h3>
          </div>

          <div className="px-5">
            <img src="https://i.ibb.co/brvTkmQ/image.png" alt="" />
            <h3 className="font-medium text-lg text-center mt-2">Iphone 15 pro plus</h3>
          </div>

          <div className="px-5">
            <img src="https://i.ibb.co/ypBbJTY/image.png" alt="" />
            <h3 className="font-medium text-lg text-center mt-2">Iphone 15 pro</h3>
          </div>
          <div className="px-5">
            <img src="https://i.ibb.co/T0gL3Cw/image.png" alt="" />
          <h3 className="font-medium text-lg text-center mt-2">Samsung galaxy tab s9</h3>
          </div>
          <div className="px-5">
            <img src="https://i.ibb.co/nfhyR4X/image.png" alt="" />
          <h3 className="font-medium text-lg text-center mt-2">Gigabyte auros 15</h3>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
