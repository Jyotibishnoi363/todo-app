
import  * as firebase from 'firebase';
import "firebase/firestore";

var app = firebase.initializeApp({
    apiKey: "AIzaSyAeQWbXLeKUYjqT5abK7Dxjdi_LYJAvnws",
    authDomain: "todo-app-cp-28201.firebaseapp.com",
    projectId: "todo-app-cp-28201",
    storageBucket: "todo-app-cp-28201.appspot.com",
    messagingSenderId: "869009565539",
    appId: "1:869009565539:web:81d2184b7566d031959556",
    measurementId: "G-4YTQV724HJ"
});

const db = app.firestore(); 

export default db;