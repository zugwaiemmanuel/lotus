<template>
    <div id="app">
<div v-for="message in messages">
    <input v-model="name.text" type="text">
    <input v-model="age.number" type="number">
    <input v-model="bloodgroup" type="text">
</div>
        <h1>Blood group of injury ward from LILY DENTAL HOSPITAL</h1>
        <input type="text" ref="newname" placeholder="Name">
        <input type="number" ref="newage" placeholder="Age">
        <input type="text" ref="newbloodgroup" placeholder="Blood Group">
        <button @click="addNewMessage">Add New</button>

    </div>
</template>

<script>
import {getFirestoore, onSnapshot, collection, doc, deleteDoc, setDoc, addDoc, orderBy, query} from 'firebase/firestore;'
import { initializeApp } from "firebase/app";
import {ref, onUnmounted } from 'vue';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestoore(app);
export default{
    name: 'App', 
    components: {},
    methods: {
        addNewMessage: function() {
            addDoc(collection(db, 'name', 'age', 'blood group'), {
                text: this.$refsnewname.value, 
                age: this.$refsnewage.value,
                bloodgroup: this.$refsnewbloodgroup.value
            })
        }
    },
    data: ( => {
        return {
            name:ref([  ])
        }
    } )
    mounted() {
        const latestQuery = query(collection(db, 'name', 'age', 'blood group'));
        const livemessages = onSnapshot(latestQuery, (snapshot) => {
            this.name = snapshot.docs.map((doc) => {
                return {
                    id:doc.id, 
                    text:doc.data().text,
                    date:doc.data().date,
                }
            })
        })
        onUnmounted(livemessages)
    }
}
</script>

<style lang="stylus" scoped>

</style>