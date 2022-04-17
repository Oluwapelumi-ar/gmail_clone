import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD2osYRh3FKwZGhvDxglfuNJjkr158w0pY",
  authDomain: "clone-1c440.firebaseapp.com",
  projectId: "clone-1c440",
  storageBucket: "clone-1c440.appspot.com",
  messagingSenderId: "807450589711",
  appId: "1:807450589711:web:718e4ad0e5e966df27417a",
  measurementId: "G-CHE7STLEWS"
};

// Initialize Firebase
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};