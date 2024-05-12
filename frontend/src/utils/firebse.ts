import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

