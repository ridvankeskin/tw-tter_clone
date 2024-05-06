// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARUcc__GDM3kMg1TXwsFG94Bq4oSmryFE",
  authDomain: "twitter-986bd.firebaseapp.com",
  projectId: "twitter-986bd",
  storageBucket: "twitter-986bd.appspot.com",
  messagingSenderId: "919484783495",
  appId: "1:919484783495:web:8cfc7ebd45443469961122",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

// veritbanının referansını alma
export const db = getFirestore(app);

// medya depolama alanının referansını alma
export const storage = getStorage(app);
