import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDT9QXFR1sLDQyRmtQi3DWMPUXONCPMHHk",
    authDomain: "nationless-world.firebaseapp.com",
    databaseURL: "https://nationless-world.firebaseio.com",
    projectId: "nationless-world",
    storageBucket: "",
    messagingSenderId: "51822215063"
  };

firebase.initializeApp(config);
export default firebase;
