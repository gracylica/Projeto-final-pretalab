import styles from './home.modules.css'
import ilustracao from '../../assets/ilustracao'

function Home() {
    return (
        <div className={styles.header}>
            <h1>
                Quero ser dev
            </h1>
            <img src={ilustracao} />
        </div>
    )
}

export default Home