import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

let firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  
  if(!firebase.apps.length){
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
