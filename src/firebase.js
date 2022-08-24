// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCbkc7fdmqDilbObpYFFrzMhMjtuujUHk4",
  authDomain: "react-authentication-396eb.firebaseapp.com",
  projectId: "react-authentication-396eb",
  storageBucket: "react-authentication-396eb.appspot.com",
  messagingSenderId: "425633570591",
  appId: "1:425633570591:web:375820892f03d9c2c01a2a",
  measurementId: "G-ELHGT9CBGC"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app); 
const analytics = getAnalytics(app);
export default app; 