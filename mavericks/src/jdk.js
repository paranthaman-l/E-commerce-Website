// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP6kM4xUHpi5pCR1Afi83ZlEz5_UhhjmU",
  authDomain: "mavericks-26adf.firebaseapp.com",
  projectId: "mavericks-26adf",
  storageBucket: "mavericks-26adf.appspot.com",
  messagingSenderId: "1030743676889",
  appId: "1:1030743676889:web:e31adc6d5ac9d3a4eb2bc8",
  measurementId: "G-5DW77MXWP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);