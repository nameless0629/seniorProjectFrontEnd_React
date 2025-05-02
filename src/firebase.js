// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC7EkgMvfNT54lGnRUsGAbbnu3Tybbj4n4",
    authDomain: "seniorproject-9a41a.firebaseapp.com",
    projectId: "seniorproject-9a41a",
    storageBucket: "seniorproject-9a41a.appspot.com",
    messagingSenderId: "330043030768",
    appId: "1:330043030768:web:9c2fd8a05a5ea23d869635",
    measurementId: "G-X0XKVN6LP2"
};

export const firebaseApp = initializeApp(firebaseConfig);