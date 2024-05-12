import { useEffect, useState } from 'react'
import { Signin } from './components/Signin';

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

 export const firebaseConfig = {
  apiKey: "AIzaSyDYBxZM2Wa_TccZRPjLXPjUWXfuk59voTc",
  authDomain: "leetcode-clone-82f24.firebaseapp.com",
  projectId: "leetcode-clone-82f24",
  storageBucket: "leetcode-clone-82f24.appspot.com",
  messagingSenderId: "27381078920",
  appId: "1:27381078920:web:f0aa52ba5973941289f83d",
  measurementId: "G-W0VFKN8GMG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



function App() {
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        console.log("this is the user ", user)
      } else {
        console.log("There is no logged in user");
      }
    });
  }, [])

  return (
    <>
      <Signin/>
    </>
  )
}

export default App
