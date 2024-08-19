// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4f82b8dC21LGNoCSMkrT8cK-ouZAquxQ",
  authDomain: "pizzaauth-7e867.firebaseapp.com",
  projectId: "pizzaauth-7e867",
  storageBucket: "pizzaauth-7e867.appspot.com",
  messagingSenderId: "768777717084",
  appId: "1:768777717084:web:00164c11befaa34035ed99",
  measurementId: "G-7WEYX46VZT"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);