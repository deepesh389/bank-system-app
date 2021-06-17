import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
const config = {
  apiKey: "AIzaSyAfpN4KOA4gnJj-yU6nHypyrezTW4DG4DM",
    authDomain: "basic-banking-system-1b7ee.firebaseapp.com",
    databaseURL: "https://basic-banking-system-1b7ee-default-rtdb.firebaseio.com",
    projectId: "basic-banking-system-1b7ee",
    storageBucket: "basic-banking-system-1b7ee.appspot.com",
    messagingSenderId: "1027171902669",
    appId: "1:1027171902669:web:895a48909ee73259e8b584"
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.FIREBASE_DATABASE_URL,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_MEASUREMENT_ID
   
  };


  firebase.initializeApp(config);
  const database=firebase.database();
  
  // database.ref('Users').push({
  //   FirstName: 'Dinesh',
  //   LastName: 'Rathore',
  //   email: 'dineshth@gmail.com',
  //   PhoneNo: 9833221155,
  //   Balance: '51,000'
  // })

  export { firebase, database as default} ;