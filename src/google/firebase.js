import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnYQ16bee1tf9mzzsKQ8aOrYrquGJvebc",
  authDomain: "fir-52943.firebaseapp.com",
  databaseURL: "https://fir-52943.firebaseio.com",
  projectId: "fir-52943",
  storageBucket: "fir-52943.appspot.com",
  messagingSenderId: "288740614122",
  appId: "1:288740614122:web:c4b6c2eca6c5ee0c285c93",
  measurementId: "G-RM7SJ8R3ME",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
