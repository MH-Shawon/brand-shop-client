// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFbLcoOb_H4S2Ad36ihm1oVhXOmgG8jeU",
  authDomain: "brand-shop-assignment-bba19.firebaseapp.com",
  projectId: "brand-shop-assignment-bba19",
  storageBucket: "brand-shop-assignment-bba19.appspot.com",
  messagingSenderId: "463919045688",
  appId: "1:463919045688:web:0def1196f29b9273a11acd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
