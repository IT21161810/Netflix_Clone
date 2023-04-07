// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7r9v3qqNX66jg9P9LsZde7V0vBrLlbEY",
  authDomain: "react-netflix-clone-6ab8a.firebaseapp.com",
  projectId: "react-netflix-clone-6ab8a",
  storageBucket: "react-netflix-clone-6ab8a.appspot.com",
  messagingSenderId: "213122761826",
  appId: "1:213122761826:web:9c6027c1ddd85a98577d3b",
  measurementId: "G-56J8T4W894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);