import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVE77j84QK49B0agMim53l3s8HZTmJBjc",
  authDomain: "netflix-clone-ddd33.firebaseapp.com",
  projectId: "netflix-clone-ddd33",
  storageBucket: "netflix-clone-ddd33.appspot.com",
  messagingSenderId: "42034602080",
  appId: "1:42034602080:web:33411de5e489345f9c6305"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };