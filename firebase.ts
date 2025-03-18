import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdnr1obBCO_xavSuEttTu0LGrfzAf0Xyg",
    authDomain: "mynotion-3a009.firebaseapp.com",
    projectId: "mynotion-3a009",
    storageBucket: "mynotion-3a009.firebasestorage.app",
    messagingSenderId: "808595606331",
    appId: "1:808595606331:web:ff84096233181e9edf451e"
  };

  const app= getApps.length===0? initializeApp(firebaseConfig):getApp();
  const db=getFirestore(app);

  export {db};