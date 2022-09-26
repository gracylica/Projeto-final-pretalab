import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, push } from 'firebase/database'

import { useState } from 'react'
import styles from './contact.module.css'
import contactImg from '../../assets/contact.svg'

const firebaseConfig = {
   apiKey: "AIzaSyAXpJTfCa8uIp35c-fkR2-MshEkASOqxIk",
   authDomain: "pretalab-projeto-final-195f0.firebaseapp.com",
   databaseURL: "https://pretalab-projeto-final-195f0-default-rtdb.firebaseio.com",
   projectId: "pretalab-projeto-final-195f0",
   storageBucket: "pretalab-projeto-final-195f0.appspot.com",
   messagingSenderId: "15069213993",
   appId: "1:15069213993:web:732c8feed552d38491f338"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);

function Contact () {
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [mensagem, setMensagem] = useState('')
   
   function handleInputValueNome(event) {
      setNome(event.target.value)
   }
   
   function handleInputValueEmail(event) {
      setEmail(event.target.value)
   }

   function handleInputValueMensagem(event) {
      setMensagem(event.target.value)
   }

   function handleCreateMessage(event) {
      event.preventDefault()
      const mensagensListRef = ref(database, 'mensagens')
      const novaMensagemRef = push(mensagensListRef)

      set(novaMensagemRef, {
         texto: mensagem,
         email: email,
         nome: nome
      })

      setMensagem('')
      setEmail('')
      setNome('')
   }
   
   return (
      <>
      <div className={styles.header}>
         <h1>
            Deixe seu contato
         </h1>
         <img src={contactImg} />
      </div>
      <div className={styles.formContainer}>
         <form onSubmit={handleCreateMessage} className={styles.form}>
            <input 
               onChange={handleInputValueNome}
               className={styles.formInput}
               placeholder="Digite seu nome"
               value={nome}
            />
            <input 
               onChange={handleInputValueEmail}
               className={styles.formInput}
               placeholder="Digite seu email"
               value={email}
            />
            <textarea 
               onChange={handleInputValueMensagem}
               className={styles.formTextArea}
               placeholder="Digite seu mansagem"
               value={mensagem}
            />
            <button className={styles.formButton} type="submit">Enviar mensagem</button>
         </form>
      </div>
      </>
   )
}

export default Contact