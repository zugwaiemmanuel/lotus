import { createApp } from 'vue'
import App from './app.vue'
import { initializeApp } from "firebase/app";

import { 
    collection, getFirestore, getDocs, addDoc, 
}

const firebaseConfig = {
    apiKey: "AIzaSyBvUCnw3Leh7GfA9rnqXdlDbu5c_X6JZp0",
    authDomain: "lily-37196.firebaseapp.com",
    projectId: "lily-37196",
    storageBucket: "lily-37196.appspot.com",
    messagingSenderId: "999138042952",
    appId: "1:999138042952:web:114d83576e78df84eba47d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = collection(db, 'records')

const q = query(colRef, where('name', '==', 'James Emmanuel'))

onSnapshot(q, (snapshot) => {
    records.push({...doc.data(), id: doc.id})
})

const addRecordForm = document.querySelector('.add')
addRecordForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(colRef, {
        name: addRecordForm.name.value,
        age: addRecordForm.age.value,
        bloodgroup: addRecordForm.bloodgroup.value,
    })
    .then(() => {
        addRecordForm.reset() 
    })
}) 