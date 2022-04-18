// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLXzca46Q6OqlxgDPLPHCAiWUP8wGzX4M",
    authDomain: "dentist-hameem.firebaseapp.com",
    projectId: "dentist-hameem",
    storageBucket: "dentist-hameem.appspot.com",
    messagingSenderId: "772312170482",
    appId: "1:772312170482:web:f2109a8b864ca2f5abb56b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
