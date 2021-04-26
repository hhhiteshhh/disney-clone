import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB9-wDCpjRl29XGPjO89XVTABdsn6jAY_w",
  authDomain: "disney-plus-bbd32.firebaseapp.com",
  projectId: "disney-plus-bbd32",
  storageBucket: "disney-plus-bbd32.appspot.com",
  messagingSenderId: "205191341405",
  appId: "1:205191341405:web:ab7ca86149d0dd3ad2b4b4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
