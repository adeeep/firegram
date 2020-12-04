import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCZ7sZhxagE3_DhxYx9DVpfcZh98ktx3_w",
    authDomain: "firegram-cb651.firebaseapp.com",
    projectId: "firegram-cb651",
    storageBucket: "firegram-cb651.appspot.com",
    messagingSenderId: "6509288277",
    appId: "1:6509288277:web:6e0cd8ae744585f053eddc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectstorage=firebase.storage();
  const projectfirestore=firebase.firestore();

  export{projectfirestore,projectfirestore}
