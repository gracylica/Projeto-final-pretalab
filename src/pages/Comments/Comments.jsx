import { FiPlus, FiTrash2 } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import CommentsImg from '../../assets/comments.svg'
import styles from './Comments.module.css'

function Comments () {
    const getLocalStorage = () => {
        let itens = localStorage.getItem('list')

        if (itens) {
            return JSON.parse(localStorage.getItem('list'))
        }
        else {
            return []
        }
    }

    const [list,setList] = useState(getLocalStorage)
    const [task,setTask] = useState('')

    function handleInput(event) {
        console.log(event.target.value)
    }

    function handleCreateTask () {
        const newTask = {
            id: nanoid(),
            title: task
        }

        if (newTask.title === '') {
            return
        }

        setList([...list,newTask])

        setTask('')
    }

    function handleRemoveTask(id) {
        const tasksFiltered = list.filter(item => item.id !== id)  
        setList(tasksFiltered)
    }

    useEffect (() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return (
     <>
        <div className={styles.header}>
            <h1>
                Deixe um Comentário
            </h1>
            <img src={CommentsImg} />
        </div>
        <div className={styles.imputContainer}>
         <input
             className={styles.input}
             type="text"
             placeholder="Digite sua mensagem aqui"
             onChange={handleInput}
             value={task}
         />
            <div className={styles.addContainer}>
             <button className={styles.addTask} onclick={handleCreateTask}>
                <FiPlus size={16} color="#fff"/>
             </button>
            </div>
        </div>
        <main>
            <ul className={styles.listItens}>
                {list.map(item => {
                    return (
                        <li key={item.id}>
                         <p>{item.title}</p>
                         <button className={styles.removeTask} onclick={() => handleRemoveTask(item.id)}>
                                <FiTrash2 size={16} />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </main>
     </>
 )
}

export default Comments