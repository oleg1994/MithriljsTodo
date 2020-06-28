// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ig6qH3PHYOkbbHXmP0jlStVl6wTQ0-c",
  authDomain: "todo-aac01.firebaseapp.com",
  databaseURL: "https://todo-aac01.firebaseio.com",
  projectId: "todo-aac01",
  storageBucket: "todo-aac01.appspot.com",
  messagingSenderId: "892583776146",
  appId: "1:892583776146:web:43d289666d8d143e83bb4b",
  measurementId: "G-Z486DZ0M7S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();


