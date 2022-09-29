import { database } from '../../services/firebase'
import { ref, set, push } from 'firebase/database'
import { AiFillGithub , AiFillLinkedin, AiFillMail } from 'react-icons/ai'
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
            <div className={styles.listaContactContainer}>
               <ul className={styles.listaContact}>
                  <li><AiFillMail size={30} color="#ad63ff"/><a href="https://gracylica@hotmail.com" target="blank"> gracylica@hotmail.com </a></li>
                  <li><AiFillLinkedin size={30} color="#ad63ff"/><a href="https://linkedin.com/in/graciele-correia-b0397049" target="_blank"> graciele-correia</a></li>
                  <li><AiFillGithub size={30} color="#ad63ff"/><a href="https://github.com/gracylica" target="_blank"> gracylica</a></li>
               </ul>
             </div>
      </div>
      </>
   )
}

export default Contact