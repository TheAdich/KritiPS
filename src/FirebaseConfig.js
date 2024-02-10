
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAqr8eR3A-uBQW3rkY0CJzSPixF3qFr75Y",
  authDomain: "loginregistration-c7c6f.firebaseapp.com",
  projectId: "loginregistration-c7c6f",
  storageBucket: "loginregistration-c7c6f.appspot.com",
  messagingSenderId: "947267810004",
  appId: "1:947267810004:web:6972bf9a6fe7fce6238141",
  measurementId: "G-M6ZFGF89G4"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//export const database=getAuth(app);
export const database = getDatabase(app);
