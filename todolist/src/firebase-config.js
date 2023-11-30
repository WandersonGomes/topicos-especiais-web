import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDXx6mtZnYrqKMZkVSHo4NrfXRIYupSz0",
    authDomain: "todolist-tew.firebaseapp.com",
    projectId: "todolist-tew",
    storageBucket: "todolist-tew.appspot.com",
    messagingSenderId: "558401888175",
    appId: "1:558401888175:web:e0916aa2bac0920e0b595a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;