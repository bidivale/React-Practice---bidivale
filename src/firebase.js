import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCvY1aUKPvFfVKkjvs81a0fq7rkgFOMS20",
    authDomain: "challange-958a8.firebaseapp.com",
    projectId: "challange-958a8",
    storageBucket: "challange-958a8.appspot.com",
    messagingSenderId: "433524212391",
    appId: "1:433524212391:web:de43551ffaac73916a1182",
    measurementId: "G-NENQ1GPXQG"
  };

export const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore;
  const Auth = getAuth(firebaseApp);
  export {db, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut};