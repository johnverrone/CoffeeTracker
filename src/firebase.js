import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDqUBv_LjGnBezcNmp5AM6jpT0qaSmUN6E",
  authDomain: "coffeetracker-7e1d3.firebaseapp.com",
  databaseURL: "https://coffeetracker-7e1d3.firebaseio.com",
  projectId: "coffeetracker-7e1d3",
  storageBucket: "coffeetracker-7e1d3.appspot.com",
  messagingSenderId: "292819468235"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
