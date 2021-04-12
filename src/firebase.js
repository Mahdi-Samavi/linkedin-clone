import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBRHFiQqicNoVrUtqlISCqcjJaGTgn6kOw",
    authDomain: "linkedin-clone-101.firebaseapp.com",
    projectId: "linkedin-clone-101",
    storageBucket: "linkedin-clone-101.appspot.com",
    messagingSenderId: "512165885424",
    appId: "1:512165885424:web:7f44e3c5b3e2fff3a59935",
    measurementId: "G-3S7EXRNKS7"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();