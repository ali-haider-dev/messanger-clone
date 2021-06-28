import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyD1E45bnVxQVaAeyjsQBJ8KS2AXLRzVwN4",
    authDomain: "facebook-messenger-42d4e.firebaseapp.com",
    projectId: "facebook-messenger-42d4e",
    storageBucket: "facebook-messenger-42d4e.appspot.com",
    messagingSenderId: "1074823527854",
    appId: "1:1074823527854:web:8fcbd512732f8ea8f81c3f",
    measurementId: "G-2K79YGKT07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export {
    db,
}