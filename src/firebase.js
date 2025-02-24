/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUHt_-MkrE-RE80Za1DGuD0gEL0caJoHE",
  authDomain: "soccer-drill-generator.firebaseapp.com",
  projectId: "soccer-drill-generator",
  storageBucket: "soccer-drill-generator.firebasestorage.app",
  messagingSenderId: "509017711531",
  appId: "1:509017711531:web:70c16baac5c1a9293ee8ee",
  measurementId: "G-3GLQYFKZG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyAUHt_-MkrE-RE80Za1DGuD0gEL0caJoHE",
    authDomain: "soccer-drill-generator.firebaseapp.com",
    projectId: "soccer-drill-generator",
    storageBucket: "soccer-drill-generator.firebasestorage.app",
    messagingSenderId: "509017711531",
    appId: "1:509017711531:web:70c16baac5c1a9293ee8ee",
    measurementId: "G-3GLQYFKZG6"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  const signInWithGoogle = () => signInWithPopup(auth, provider);
  const logout = () => signOut(auth);

  export { auth, signInWithGoogle, logout };