import firebase from "firebase/app";
import "firebase/storage"; // it is to store the images
import "firebase/firestore"; // it is the data base
var firebaseConfig = {
  apiKey: "AIzaSyC0-vWeIQJ9Zs9pPw7USwg35mSjgZzou18",
  authDomain: "firegram-e83f2.firebaseapp.com",
  projectId: "firegram-e83f2",
  storageBucket: "firegram-e83f2.appspot.com",
  messagingSenderId: "912026743060",
  appId: "1:912026743060:web:0a58aa0b614556b1271201",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
