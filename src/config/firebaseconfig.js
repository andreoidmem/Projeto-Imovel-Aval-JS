import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC8N2NuvO8TWDCbTHTC-YqFs6RuoXckBwI",
    authDomain: "capimoaplicativo.firebaseapp.com",
    projectId: "capimoaplicativo",
    storageBucket: "capimoaplicativo.appspot.com",
    messagingSenderId: "321940408831",
    appId: "1:321940408831:web:2bea2150e0202fe9edffca",
    measurementId: "G-PF07CC6XVP"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  db.settings({ experimentalForceLongPolling: true, })
  
  
  export { auth };
  export default db;