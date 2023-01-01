import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAHBSDr6lQppPaZb6jlqSlpK2PpYZAOk-8",
    authDomain: "netflix-clone-f9b5a.firebaseapp.com",
    projectId: "netflix-clone-f9b5a",
    storageBucket: "netflix-clone-f9b5a.appspot.com",
    messagingSenderId: "970512296205",
    appId: "1:970512296205:web:445e0250f7e4f11cefe844"
};
const firebaseApp = firebase.initialiszeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;