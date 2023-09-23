// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-bf977.firebaseapp.com",
  projectId: "mern-auth-bf977",
  storageBucket: "mern-auth-bf977.appspot.com",
  messagingSenderId: "1089926879424",
  appId: "1:1089926879424:web:5c87ffe65b42d2000df525",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
