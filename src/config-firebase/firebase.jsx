import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRa33R31eWrXTg8oYS6q28Hg_uIZ4aY2c",
  authDomain: "leave-app-7c5f0.firebaseapp.com",
  projectId: "leave-app-7c5f0",
  storageBucket: "leave-app-7c5f0.appspot.com",
  messagingSenderId: "1024294652406",
  appId: "1:1024294652406:web:a841802e435ff52773dfd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);