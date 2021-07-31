import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCTjYg0qSHSyjWUlqDe6FDmcNEFIN18jZE",
    authDomain: "tabber-au7208.firebaseapp.com",
    projectId: "tabber-au7208",
    storageBucket: "tabber-au7208.appspot.com",
    messagingSenderId: "22141724467",
    appId: "1:22141724467:web:b19c4e5f1b557339870046",
    measurementId: "G-EW08TWY17C"
};

firebase.initializeApp( firebaseConfig );
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters( {
    'prompt': 'select_account'
} );

export { firebase, database, googleAuthProvider };
