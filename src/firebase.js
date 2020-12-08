import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAhXs4RYKnJbP5lPf5NAThqhG6ElNmBMOs",
    authDomain: "chat-a9cd7.firebaseapp.com",
    databaseURL: "https://chat-a9cd7.firebaseio.com",
    projectId: "chat-a9cd7",
    storageBucket: "chat-a9cd7.appspot.com",
    messagingSenderId: "719004683133",
    appId: "1:719004683133:web:bb03274ae604d47fcf5a14",
    measurementId: "G-CLV33RWKHZ"
}

const app = firebase.default.initializeApp(firebaseConfig)
app.firestore().settings({ timestampsInSnapshots: true })

export const connect = app.database().ref('.info/connected')
export const db = app.firestore()
