
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyBuhnswhEqJ33lYQcroVNJoOSHr1RCMk3o",

  authDomain: "anoroam-music.firebaseapp.com",

  projectId: "anoroam-music",

  storageBucket: "anoroam-music.appspot.com",

  messagingSenderId: "991871619611",

  appId: "1:991871619611:web:ebf4c3dd47124ce59a1ebe",

  measurementId: "G-VCY2DH38ZR"

};
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;
  