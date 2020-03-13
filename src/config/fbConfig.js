import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCw0-eL70o4zXsry9kqHAP-OSghLrZNCIY",
    authDomain: "project-plan-8aa8a.firebaseapp.com",
    databaseURL: "https://project-plan-8aa8a.firebaseio.com",
    projectId: "project-plan-8aa8a",
    storageBucket: "project-plan-8aa8a.appspot.com",
    messagingSenderId: "157590890247",
    appId: "1:157590890247:web:0ee538b223336e41a307a2",
    measurementId: "G-DY5YPDEKFQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

  