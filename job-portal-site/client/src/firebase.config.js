// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB29JfzynDz8dwwhShzHPW4OUw6G4qbg04",
  authDomain: "online-job-portal-60d80.firebaseapp.com",
  projectId: "online-job-portal-60d80",
  storageBucket: "online-job-portal-60d80.appspot.com",
  messagingSenderId: "378455955239",
  appId: "1:378455955239:web:ee0af267dff0c8908abb02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}