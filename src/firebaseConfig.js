
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyALJdqFjGilU-Cx6_QI0hlGzlu0YYBDvPM",
    authDomain: "garota-blog.firebaseapp.com",
    projectId: "garota-blog",
    storageBucket: "garota-blog.appspot.com",
    messagingSenderId: "55323238963",
    appId: "1:55323238963:web:84207993a980c4025eb946"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export { db, auth };