import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithPopup, updateProfile } from "firebase/auth";
import { AuthContext } from "../firebase/AuthProvider";

const Register = () => {
  const { createUser, auth, googleLogin } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState('');
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, name, photoUrl, password);

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should have at least one capital letter");
      return;
    }
    // else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&?*]).{6,}$/.test(password)){
    //   setRegisterError('Password should have at least one special character')
    //   return
    // }
    else if (!/[\W_]/.test(password)) {
      setRegisterError("Password should have at least one special character");
      return;
    }

    setRegisterError("");

    //CREATE USER

    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateProfile(.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        }).then(result);
        console.log(result);

        toast("Registration complete!");
        e.target.reset();
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleLogin)
      .then((result) => {
        toast("Welcome back");
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="h-full md:w-1/2 lg:w-1/3 mx-auto">
        <h2 className="text-4xl font-bold text-center mt-28">
          Please Register.
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
            />

            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
              className="input input-bordered"
            />

            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#7cf5cd]">Register</button>
          </div>
        </form>
        {registerError && (
          <p className="flex justify-center items-center text-center text-xl font-semibold text-red-600 mb-5">
            {registerError}{" "}
          </p>
        )}
        <p className="text-center text-lg ">
          Already have an account? Please{" "}
          <Link className="font-bold text-lg text-fuchsia-300" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>

      <div className="w-full">
        <div className="flex justify-center items-center">
          <button
            onClick={handleGoogleLogin}
            className="text-3xl btn w-1/3 bg-[#7cf5cd] mt-20 font-medium font-Crimson  justify-center text-center items-center flex"
          >
            Register with <FcGoogle></FcGoogle>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
