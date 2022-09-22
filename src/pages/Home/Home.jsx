import styles from './home.module.css'
import homeImg from '../../assets/home-img.svg'

function Home() {
    return (
        <div className={styles.header}>
            <h1>
                Projeto Sou dev!
            </h1>
            <img src={homeImg} />
        </div>
    )
}

export default Home