import {
 
  getAuth,

} from "firebase/auth";

import {  createContext } from "react";
import app from "./firebase.config";


export const AuthContext = createContext(null)



// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {



    const auth = getAuth(app)



    const authInfo ={
        auth,

    }



    return (
       <AuthContext.Provider value={authInfo}>
{children} 
       </AuthContext.Provider>
    );
};

export default AuthProvider;