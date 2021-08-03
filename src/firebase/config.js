import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCDY2CkmkBX0fFlwmBgy-7R8w45TcGZLQo",
    authDomain: "morningstar-b0754.firebaseapp.com",
    projectId: "morningstar-b0754",
    storageBucket: "morningstar-b0754.appspot.com",
    messagingSenderId: "553887133322",
    appId: "1:553887133322:web:aa162aeea53be1527a8773"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

