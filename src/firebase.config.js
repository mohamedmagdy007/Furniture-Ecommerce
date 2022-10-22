// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore}  from "firebase/firestore";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyDeX2oR5LijP0rE-tchC2crqu81uP8lGtw",
  authDomain: "multimart-851de.firebaseapp.com",
  projectId: "multimart-851de",
  storageBucket: "multimart-851de.appspot.com",
  messagingSenderId: "903841445698",
  appId: "1:903841445698:web:e237ed3139a795cfa87adb"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db =getFirestore(app)
export const storage = getStorage(app)
export default app;