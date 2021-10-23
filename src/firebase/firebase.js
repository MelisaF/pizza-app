import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBGl_5E85J-xYg5yl2lMvt2Y7svRxq4y2s",
    authDomain: "pizza-aap.firebaseapp.com",
    projectId: "pizza-aap",
    storageBucket: "pizza-aap.appspot.com",
    messagingSenderId: "646764336173",
    appId: "1:646764336173:web:680162fa36a295c2c054a4"
};

const app = firebase.initializeApp(firebaseConfig);  

export const firestore = firebase.firestore(app)
export const TimeStamp = firebase.firestore.Timestamp;