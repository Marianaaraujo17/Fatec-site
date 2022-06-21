import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCEbiLdI20WyGrEXCrT1M_XvaYxE3SqmYA",
  authDomain: "fatecsjc-site-4e6a9.firebaseapp.com",
  projectId: "fatecsjc-site-4e6a9",
  storageBucket: "fatecsjc-site-4e6a9.appspot.com",
  messagingSenderId: "1070827088913",
  appId: "1:1070827088913:web:4dfd3cf94c4a92153c95b0",
  measurementId: "G-KJXW5Q0RP9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
