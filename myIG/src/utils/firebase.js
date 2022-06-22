import firebase from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAF1Nt24eLR7DuDYbqbe2y_jv1UNEsCdK8",
    authDomain: "myig-5b5f5.firebaseapp.com",
    projectId: "myig-5b5f5",
    storageBucket: "myig-5b5f5.appspot.com",
    messagingSenderId: "892401093988",
    appId: "1:892401093988:web:eac880260cac3c7910fe71",
    measurementId: "G-J64Q3E7QVE"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;