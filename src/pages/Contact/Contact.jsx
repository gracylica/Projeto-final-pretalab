import { database } from '../../services/firebase'
import { ref, set, push } from 'firebase/database'

import { useState } from 'react'
import styles from './contact.module.css'
import contactImg from '../../assets/contact.svg'


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