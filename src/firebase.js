
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJvCld_4hE2bZEAvse2sbL2Vgj_vAO_Ss",
    authDomain: "chat-app-efc1b.firebaseapp.com",
    projectId: "chat-app-efc1b",
    storageBucket: "chat-app-efc1b.appspot.com",
    messagingSenderId: "747846828761",
    appId: "1:747846828761:web:5b2a8af2c1b6a8356234c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)