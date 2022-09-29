
import devHomeImg from '../../assets/home-img.svg'
import calcImg from '../../assets/img-calculadora.png'
import instImg from '../../assets/img-instagram.png'
import portImg from '../../assets/img-portifolio.png'
import styles from '../About/about.module.css'

function About() {
  return (
    <>
      <div className={styles.header}>
      <img src={devHomeImg} />
        <p>
          "Olá, sou Graciele Correia, tenho 34 anos e sou natural de Pernambuco. 
            Com formação em Comunicação visual e com mais de 10 anos de experiência
            profissional estou migrando de carreira para a área de tecnologia. Busco por
            uma oportunidade em Front End e assim consolidar e obter novos
            conhecimentos e experiências, colaborando em novos projetos cada vez mais
            inovadores.
        </p>
      </div>
      <div className={styles.subtitulo}>
        <p> Meus Projetos.</p>
      </div>
      <div className={styles.containerProjetos}>
      <ul className={styles.card}>
        <li>
          <p>Calculadora</p>
          <img src={calcImg} /></li>
        <li>
          <p>Instagram</p>
          <img src={instImg} /></li>
        <li>
          <p>Portfólio</p>
          <img src={portImg} /></li>
      </ul>
      </div>
    </>
  )
}

export default About