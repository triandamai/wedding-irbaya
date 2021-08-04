import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import firebase from "firebase/app"
import "firebase/firestore"
import Notifications from "@kyvg/vue3-notification"


firebase.initializeApp({
    apiKey: "AIzaSyBOo-s1-i_BcxU4EobnITuFW92wUVxWt2Q",
    authDomain: "myproject-64aac.firebaseapp.com",
    databaseURL: "https://myproject-64aac.firebaseio.com",
    projectId: "myproject-64aac",
    storageBucket: "myproject-64aac.appspot.com",
    messagingSenderId: "264573731963",
    appId: "1:264573731963:web:9fce05b7f70ef04abe4ede",
    measurementId: "G-LWQ5DHHGKK"
})

//sakura js
import "./assets/sakura.css"
import "./assets/index.css"

 createApp(App).use(router).use(Notifications).mount('#app')

