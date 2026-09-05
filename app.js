import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    update, 
    increment 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaECV1hUPXM8IxkY5dY153eyNcJFmv76Q",
  authDomain: "votacaosite-db29b.firebaseapp.com",
  databaseURL: "https://votacaosite-db29b-default-rtdb.firebaseio.com",
  projectId: "votacaosite-db29b",
  storageBucket: "votacaosite-db29b.firebasestorage.app",
  messagingSenderId: "144073471347",
  appId: "1:144073471347:web:67baf0d6aea77dd76e8106"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Envia o voto para o Realtime Database


// Configura os cliques dos botões
