import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC3Pyql4Q2zlsd-CLt4wSgdOJEkZy2ybDw",
    authDomain: "letmeask-be2ba.firebaseapp.com",
    databaseURL: "https://letmeask-be2ba-default-rtdb.firebaseio.com",
    projectId: "letmeask-be2ba",
    storageBucket: "letmeask-be2ba.appspot.com",
    messagingSenderId: "524324928704",
    appId: "1:524324928704:web:fa22c989aa4b9f8a72c125"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();