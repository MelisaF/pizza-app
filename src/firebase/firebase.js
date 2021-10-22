import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDd2F6Wj8aHehbk8GBsvqD8CpoDlNUpkSY",
    authDomain: "react-coder-squashmarket.firebaseapp.com",
    projectId: "react-coder-squashmarket",
    storageBucket: "react-coder-squashmarket.appspot.com",
    messagingSenderId: "190020727199",
    appId: "1:190020727199:web:e2c3f173c493b5c5554daa"
  };

const app = firebase.initializeApp(firebaseConfig);  

export const firestore = firebase.firestore(app)
export const TimeStamp = firebase.firestore.Timestamp;