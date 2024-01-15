import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCx4fVqbBhxGfzJKZ4yhb2iAcwW2IOqtpk",
  authDomain: "holidayapp2-652d7.firebaseapp.com",
  projectId: "holidayapp2-652d7",
  storageBucket: "holidayapp2-652d7.appspot.com",
  messagingSenderId: "625101454202",
  appId: "1:625101454202:web:6b92232944160ba06f34c3"
};
  
  // Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export default firebase