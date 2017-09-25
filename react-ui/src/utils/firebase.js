import firebase from 'firebase';

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

const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

const database = firebase.database();
const auth = firebase.auth();

export { firebase, auth };
export { firebaseListToArray };
