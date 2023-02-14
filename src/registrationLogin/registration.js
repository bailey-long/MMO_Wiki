// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, collection} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByDyQ7MI44ZhUdpBqGRkQk5YsAsdHsfz8",
  authDomain: "mmo-wiki.firebaseapp.com",
  databaseURL: "https://mmo-wiki-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mmo-wiki",
  storageBucket: "mmo-wiki.appspot.com",
  messagingSenderId: "1032198256434",
  appId: "1:1032198256434:web:03904d7ca9aa499abe892b",
  measurementId: "G-PB77QTDM8B"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//create a reference to the database
const auth = firebase.auth();
const db = getFirestore();
const colRef = collection(db, "user");

//signup
const registrationForm = document.querySelector('#registrationForm');
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = registrationForm['Email'].value;
    const password = registrationForm['Password'].value;

    console.log(email, password);

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        
    });
});

//logout