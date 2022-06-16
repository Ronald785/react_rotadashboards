import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFxW_UN8F3ybVdFVtJibdNuU1CkzPgJpY",
  authDomain: "rotadashboards.firebaseapp.com",
  databaseURL: "https://rotadashboards-default-rtdb.firebaseio.com",
  projectId: "rotadashboards",
  storageBucket: "rotadashboards.appspot.com",
  messagingSenderId: "276254502103",
  appId: "1:276254502103:web:1360f65d4047c7408b5492",
  measurementId: "G-ZSZ71W6Q4X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth  = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);