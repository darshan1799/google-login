// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);
const firebaseConfig = {
  apiKey,
  authDomain: "login-33744.firebaseapp.com",
  projectId: "login-33744",
  storageBucket: "login-33744.firebasestorage.app",
  messagingSenderId: "668508442218",
  appId: "1:668508442218:web:04190744ed3b5f6a81c413",
  measurementId: "G-YG13P53SHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
