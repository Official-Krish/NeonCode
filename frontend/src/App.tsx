import { useEffect, useState } from 'react'
import { Signin } from './components/Signin';

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { RecoilRoot, useRecoilState } from 'recoil';
import { userAtom } from './store/atoms/user';

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
  return (
    <RecoilRoot>
      <StoreApp />
    </RecoilRoot>
  );
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom);


  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user && user.email) {
        setUser({
          Loading: false,
          user: {
            email: user.email,
          },
        });
      } else {
        setUser({
          Loading: false,
        });
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }, [])

  if (user.Loading) {
    return <div>loading ...</div>;
  }
  
  if (!user.user) {
    return <div><Signin /></div>
  }
  
  return <div className='flex justify-center'>
    You are logged in as {user.user.email}
  </div>
}

export default App;