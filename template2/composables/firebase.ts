// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCKKcfbqaOt_6G6Wij-T_ts_WsndRZDB9g",

  authDomain: "myproject-64aac.firebaseapp.com",

  databaseURL: "https://myproject-64aac.firebaseio.com",

  projectId: "myproject-64aac",

  storageBucket: "myproject-64aac.appspot.com",

  messagingSenderId: "264573731963",

  appId: "1:264573731963:web:6dca325539eca72ebe4ede",

  measurementId: "G-C0TGGL2M4R"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {
    firestore
}