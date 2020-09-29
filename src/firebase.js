// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA65zvGEiwUFghOLoRmxvvX4qXUuQT_SF4",
    authDomain: "slack-24fec.firebaseapp.com",
    databaseURL: "https://slack-24fec.firebaseio.com",
    projectId: "slack-24fec",
    storageBucket: "slack-24fec.appspot.com",
    messagingSenderId: "825428536127",
    appId: "1:825428536127:web:299f81307b7b8c8fdb418a",
    measurementId: "G-HY5CK20DWE"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider()

  export {auth,provider}
  export default db