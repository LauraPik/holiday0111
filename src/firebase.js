import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCk3OVD8yreFTEZrIUv47cnsGNwen5El_w",
  
    authDomain: "holidayapp0111.firebaseapp.com",
  
    projectId: "holidayapp0111",
  
    storageBucket: "holidayapp0111.appspot.com",
  
    messagingSenderId: "294842704541",
  
    appId: "1:294842704541:web:ddf030230f3d524e7eea74"
  
  };
  
  // Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export default firebase