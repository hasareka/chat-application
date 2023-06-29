// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD-kBvDDlUc6vZ12YGTntDr5gre0F0qAO4",
  authDomain: "chat-application-42a04.firebaseapp.com",
  projectId: "chat-application-42a04",
  storageBucket: "chat-application-42a04.appspot.com",
  messagingSenderId: "868580695696",
  appId: "1:868580695696:web:fbab420d8766c7ffcf0215",
  measurementId: "G-WN1WD1XW9V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

const analytics = getAnalytics(app);