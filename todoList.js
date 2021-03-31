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
//
// firebase.initializeApp(firebaseConfig);
// let database = firebase.database();

Vue.component('list-entry', {
    props: ['time', 'description'],
    template: `
      <li class="list-group-item">
      <div class="container">
      <div class="row">
      <div class="col-2">{{ time }}</div>
      <div class="col">{{ description }}</div>
      <div class="col-2"><button type="button" class="btn btn-outline-secondary"><i class="bi-check bi-check2"></i></button></div></div>
      </div>
      </li>
    `
});

Vue.component('prop-component', {
    props: ['text', 'anotherprop'],
    template: `
      <div>
      <h3>This is a prop-based component</h3>
      <p>It has some props, but no data and no functionality</p>
      <p>The {{text}} jumped over the {{anotherprop}}.</p>
      </div>
    `
});

const app = new Vue({
    el: '#app',
    data: {
        todo: [
            {time: "May 1, 11:25A", description: "Do laundry"},
            {time: "May 2, 11:25A", description: "Do shopping"},
            {time: "May 3, 11:25A", description: "Do chores"},
        ]
    }
})