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

function writeNewTodo(descr) {
    let ts = Date.now();
    database.ref('todo/'+ts).set({
        text: descr
    });

    return {time: ts, description: descr}
}

function parseTime(ts) {
    let date = new Date(ts);
    return date.toLocaleString();
}

Vue.component('list-entry', {
    props: ['time', 'description'],
    template: `
      <li class="list-group-item">
      <div class="container">
      <div class="row">
      <div class="col-2">{{ localeTime }}</div>
      <div class="col">{{ description }}</div>
      <div class="col-2"><button type="button" class="btn btn-outline-secondary"><i class="bi-check bi-check2"></i></button></div></div>
      </div>
      </li>
    `,
    data: function (){
        return {
            localeTime: parseTime(this.time),
        }
    }
});

Vue.component('add-entry',
    {
        props: ['description'],
        template: `
        <li class="list-group-item">
      <div class="container">
      <div class="row">
      <div class="col-2"></div>
      <div class="col form-floating mb-3"><input type="text" class="form-control" id="newTodoText"
       v-bind:description="description" v-on:input="$emit('input', $event.target.value)"
       placeholder="Todo Text">
            <label for="newTodoText">Todo Text</label></div>
      <div class="col-2"><button type="button" v-on:click="submit_todo" class="btn btn-outline-secondary"><i class="bi bi-plus"></i></button></div>
      </div>
      </div>
      </li>
        `,
        methods: {
            submit_todo: function () {
                this.$emit('submitnewtodo')
            }
        }
    }
    )

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
            {time: Date.now(), description: "Do laundry"},
            {time: Date.now(), description: "Do shopping"},
            {time: Date.now(), description: "Do chores"},
        ],
        newDescription: ""
    },
    methods: {
        handle_submitnewtodo: function(){
            console.log(this.newDescription)
            let desc = this.newDescription;
            let newdescr = writeNewTodo(desc);
            console.log(newdescr);
            this.todo.push(newdescr);

        }
    }
})