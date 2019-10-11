import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCcVFAs_n0jGj2iNQDTgwVogtqYifMgN1A",
  authDomain: "e-commarce-db.firebaseapp.com",
  databaseURL: "https://e-commarce-db.firebaseio.com",
  projectId: "e-commarce-db",
  storageBucket: "e-commarce-db.appspot.com",
  messagingSenderId: "312308364131",
  appId: "1:312308364131:web:749a1165faba6492461956",
  measurementId: "G-1LJ8NR4CYF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
