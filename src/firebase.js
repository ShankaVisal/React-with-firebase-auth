
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSvw7gV0BwHKBlyucvFqC-t7BvYYH4TCQ",
  authDomain: "react-auth-56e87.firebaseapp.com",
  projectId: "react-auth-56e87",
  storageBucket: "react-auth-56e87.appspot.com",
  messagingSenderId: "751510197600",
  appId: "1:751510197600:web:6812a082462a344409ba05"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);