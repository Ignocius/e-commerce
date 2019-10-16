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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
