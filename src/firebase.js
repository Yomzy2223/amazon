import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, getDocs, Firestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBy6VNLKePDJTHUJylLhOJxW1CDmB8w5O4",
  authDomain: "clone-4c738.firebaseapp.com",
  projectId: "clone-4c738",
  storageBucket: "clone-4c738.appspot.com",
  messagingSenderId: "715910352273",
  appId: "1:715910352273:web:fe5e63ac66041107d15e30",
  measurementId: "G-F3RY3R1ZTN",
};

const app = initializeApp(firebaseConfig);
// const db = getFireStore(app);
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
