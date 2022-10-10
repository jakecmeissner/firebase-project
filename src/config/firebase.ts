// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9D1jSEkrR78Ly97jy02K7UxPY6hKwdLU",
  authDomain: "react-course-9c9e8.firebaseapp.com",
  projectId: "react-course-9c9e8",
  storageBucket: "react-course-9c9e8.appspot.com",
  messagingSenderId: "357417175372",
  appId: "1:357417175372:web:48ecc0c0b7ea933acea7e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)