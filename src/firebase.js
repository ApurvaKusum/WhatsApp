import  firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnkYROfKIyPpoCW53bkrwik1xG6MUgeVI",
    authDomain: "whatsappclone-fd5c5.firebaseapp.com",
    databaseURL: "https://whatsappclone-fd5c5.firebaseio.com",
    projectId: "whatsappclone-fd5c5",
    storageBucket: "whatsappclone-fd5c5.appspot.com",
    messagingSenderId: "977300929222",
    appId: "1:977300929222:web:8e36acd5e400bed15a35c7",
    measurementId: "G-H8TZ44VKRS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;