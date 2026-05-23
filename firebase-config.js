import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOwt2CpF5T9f5gigQLi4UIA0KcX7uM67c",
  authDomain: "khanhduy-3aa91.firebaseapp.com",
  projectId: "khanhduy-3aa91",
  storageBucket: "khanhduy-3aa91.firebasestorage.app",
  messagingSenderId: "471230011703",
  appId: "1:471230011703:web:2cfdb38f12ff95da08a2b2",
  measurementId: "G-2C049PNMY5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup
};