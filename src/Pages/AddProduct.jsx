import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const category = form.dropdown.value;

    const newProduct = {
      name,
      brand,
      price,
      description,

      rating,
      photo,
      category,
    };

    console.log(newProduct);

    //data sending to server
    fetch(
      "http://localhost:5000/product",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <div>
      <div className="  p-24">
        <h2 className="text-3xl font-extrabold">Add Product</h2>

        <form onSubmit={handleAddProduct}>
          {/* form row name & quantity */}
          <div className="md:flex ">
            <div className="form-control md:w-1/2  w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2  md:ml-5 w-full ">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  placeholder="Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row supplier  */}

          <div className="md:flex ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2  md:ml-5">
              <label className="label">
                <span className="label-text">Short Description </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Short Description "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row category & details */}
          <div className="md:flex ">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-5">
              <label className="label">
                <span className="label-text">Photo URL </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form Photo url  */}

          <div className=" mb-8 mt-7 ">
            <div className="relative inline-flex">
              <svg
                className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 9.822c-9.763-9.763-25.592-9.763-35.355 0C2.56 14.69 0 20.952 0 27.213v177.571c0 6.262 2.56 12.524 7.323 17.284l163.358 163.15c9.763 9.679 25.475 9.679 35.238 0l163.354-163.15c4.764-4.76 7.324-11.022 7.324-17.284V27.213c0-6.262-2.56-12.524-7.323-17.391L206 171.144z"
                  fill="#648299"
                  stroke="#648299"
                ></path>
              </svg>

              <select
                name="dropdown"
                className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10
 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              >
                <option>Apple</option>
                <option>Samsung</option>
                <option>Google</option>
                <option>Microsoft</option>
                <option>Xiaomi</option>
                <option>Nokia</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="btn btn-block bg-gray-500 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
