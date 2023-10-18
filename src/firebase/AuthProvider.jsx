import {
 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,

} from "firebase/auth";

import {  createContext, useEffect, useState } from "react";
import app from "./firebase.config";


export const AuthContext = createContext(null)



// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);



    const auth = getAuth(app)


    //register or creating user
    const createUser = ( email, password) => {
      setLoading(true);
  
      return createUserWithEmailAndPassword(auth, email, password)
     
    };


    const signIn = (email, password) => {
      setLoading(true);
  
      return signInWithEmailAndPassword(auth, email, password);
    };
  
  
    const googleLogin = new GoogleAuthProvider()
  

  //signout or logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("on auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);

      console.log(user);



    });
    return () => {
      unSubscribe();
    };
  }, []);




    const authInfo ={
      auth,
    user,
    createUser,
    logOut,
    signIn,
    loading,
    googleLogin,
    }



    return (
       <AuthContext.Provider value={authInfo}>
{children} 
       </AuthContext.Provider>
    );
};

export default AuthProvider;