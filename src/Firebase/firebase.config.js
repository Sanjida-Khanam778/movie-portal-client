// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoE47m7kYHSCabryFZMReeNYr7qwcwEhk",
  authDomain: "movie-portal-8bfdb.firebaseapp.com",
  projectId: "movie-portal-8bfdb",
  storageBucket: "movie-portal-8bfdb.firebasestorage.app",
  messagingSenderId: "17589278278",
  appId: "1:17589278278:web:371a6ffaea652b0b325c47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);