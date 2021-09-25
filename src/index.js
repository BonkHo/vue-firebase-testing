import { initalizeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcH8jY42roKKdI6X3an5t3LxuWjrpKgZU",
    authDomain: "petite-firebase.firebaseapp.com",
    projectId: "petite-firebase",
    storageBucket: "petite-firebase.appspot.com",
    messagingSenderId: "698540584453",
    appId: "1:698540584453:web:bbe8e92ba9a6f01b51366c",
    measurementId: "G-FQKDQ2Q6JM",
};

const firebaseApp = initalizeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
