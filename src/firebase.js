import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


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
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
