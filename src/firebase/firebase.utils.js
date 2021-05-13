import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC4ZsKfNPJBMnygHTwsc9fC8--sWt1gT98",
  authDomain: "crwn-db-865f2.firebaseapp.com",
  projectId: "crwn-db-865f2",
  storageBucket: "crwn-db-865f2.appspot.com",
  messagingSenderId: "1081553997676",
  appId: "1:1081553997676:web:79feeb9292141004172d49",
  measurementId: "G-5V1798ZN89",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
