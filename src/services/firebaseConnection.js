import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyDJAOi11wNo33F_YYDz3sbHHn9zqlPd78M",
    authDomain: "financas-542cc.firebaseapp.com",
    projectId: "financas-542cc",
    storageBucket: "financas-542cc.appspot.com",
    messagingSenderId: "417345075941",
    appId: "1:417345075941:web:94954d8d0e24e290a3b20c"
  };
  
  if(!firebase.apps.length){
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
