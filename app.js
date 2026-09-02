// ==========================================
// PARTE 1: IMPORTAR O FIREBASE (REALTIME DATABASE)
// ==========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    onValue, 
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


// Inicializa o Firebase e o Realtime Database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ==========================================
// PARTE 3: REFERÊNCIA À "ÁRVORE" DO BANCO
// No Realtime DB, tudo é uma grande árvore JSON. 
// Apontamos para o "galho" chamado 'candidatos'
// ==========================================

// ==========================================
// PARTE 4: ATUALIZAR OS DADOS NA TELA (onValue)
// ==========================================

// ==========================================
// PARTE 5: CONECTANDO OS BOTÕES DO HTML COM O JAVASCRIPT
// ==========================================
// Seleciona TODOS os botões que têm a classe 'btn-votar'


// ==========================================
// PARTE 6: FUNÇÃO DE ENVIAR O VOTO
// Agora é uma função normal, não precisa mais do "window."
// ==========================================




