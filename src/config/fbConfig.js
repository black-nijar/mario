import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAkKfiAG9dEPfFS46XcXRKE9fyRe1hpQD8",
    authDomain: "mario-2132.firebaseapp.com",
    databaseURL: "https://mario-2132.firebaseio.com",
    projectId: "mario-2132",
    storageBucket: "mario-2132.appspot.com",
    messagingSenderId: "29142169611",
    appId: "1:29142169611:web:2fe36dbffe572ba0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})
  

  export default firebase