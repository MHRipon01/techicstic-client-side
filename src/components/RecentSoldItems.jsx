

const RecentSoldItems = () => {
  return (
    <div className="mt-20 w-full ">
      <div className="flex w-[90%]  content-between justify-between">
        <div>
          <h2 className="text-4xl font-bold ml-5 md:ml-14">
            Recently sold Product&lsquo;s
          </h2>
        </div>
        <div>
          <button  className="bg-sky-300 text-white text-xl p-4 rounded-lg">
            View More
          </button>
        </div>
      </div>

      <div className=" md:pl-60 lg:pl-0 overflow-hidden lg:ml-0  md:grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 w-full">
        <div>
          <img src="https://i.ibb.co/RyLQS1j/1.png" alt="" />
        </div>
        <div>
          <img
            className=" pt-3 max-w-sm lg:max-w-md  border-purple-500"
            src="https://i.ibb.co/ZG3YNr7/4.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="lg:max-w-lg pt-5 max-w-sm"
            src="https://i.ibb.co/w0GbNNK/5.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RecentSoldItems;
