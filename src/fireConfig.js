
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBE0OWjmjZmQscZsmBRple31NDCT4m8SbA",
  authDomain: "litonline-76cc4.firebaseapp.com",
  projectId: "litonline-76cc4",
  storageBucket: "litonline-76cc4.appspot.com",
  messagingSenderId: "244746937175",
  appId: "1:244746937175:web:264d6145ac22889dac1412",
  measurementId: "G-LZR85NCR9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
export default fireDB