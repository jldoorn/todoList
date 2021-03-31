const firebaseConfig = {
    apiKey: "AIzaSyAPV7B00VWQYwqpzheAZI7BXWxWax8Xelk",
    authDomain: "vuejstodo-6d01b.firebaseapp.com",
    databaseURL: "https://vuejstodo-6d01b-default-rtdb.firebaseio.com",
    projectId: "vuejstodo-6d01b",
    storageBucket: "vuejstodo-6d01b.appspot.com",
    messagingSenderId: "667879597898",
    appId: "1:667879597898:web:64a90b4d399bdf223803b3"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let database = firebase.database();
