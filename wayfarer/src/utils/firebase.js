import firebase from 'firebase';

// TODO: replace with your project's customized code snippet
const config = {
  apiKey: "AIzaSyD0e__nELGQ9X4G7m_rxILKqoJR5IMORCY",
  authDomain: "project-2-wayfarer-app.firebaseapp.com",
  databaseURL: "https://project-2-wayfarer-app.firebaseio.com",
  projectId: "project-2-wayfarer-app",
  storageBucket: "project-2-wayfarer-app.appspot.com",
  messagingSenderId: "342206862459"
};

// initialize firebase app with config information
firebase.initializeApp(config);

const auth = firebase.auth();
export { firebase, auth }
