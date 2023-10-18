import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loader from '../assets/loader.gif'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation()
  console.log(location.pathname);



  if (loading) {
    return (
        <div className="h-[90vh] flex justify-center items-center ">
       
       <img className="w-56" src={loader} alt="" />
     
       
      </div>
      
    )
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
