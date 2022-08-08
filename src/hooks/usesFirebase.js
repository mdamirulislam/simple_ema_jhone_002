import { useState } from 'react';
import { getAuth, GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut   } from "firebase/auth";
import initializeFirebase from './../Firebase/firebase.init';
import { useEffect } from 'react';

const useFirebase =()=>{
    initializeFirebase();
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    /// google signIn system
    const signInUsingGoogle =()=>{
          return  signInWithPopup(auth, googleProvider)
      
    }
     // logOut
   const logOut =()=>{
    signOut(auth).then(()=>{
        setUser({})
    })
   }
    // user observer 
   useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setUser(user)
        }
    })
   },[])
  

    return{
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;