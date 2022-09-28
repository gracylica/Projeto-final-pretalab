import devImg from '../../assets/minha-foto.png'
import softImg from '../../assets/soft-skills.svg'
import styles from '../About/about.module.css'

function About() {
  return (
    <>
      <div className={styles.header}>
      <img src={devImg} />
        <p>
          "Olá, me chamo Graciele Correia, tenho 34 anos e sou natural de Pernambuco. 
            Com formação em Comunicação visual e com mais de 10 anos de experiência
            profissional estou migrando de carreira para a área de tecnologia. Busco por
            uma oportunidade em Front End e  assim obter consolidar e obter por novos
            conhecimentos e experiências e colaborando em novos projetos cada vez mais
            inovadores.
        </p>
      </div>
      <div className={styles.subtitulo}>
        <img src={softImg} />
        <p> Projetos feitos com conhecimentos adquiridos
          em HTML, CSS, JS e React pelo Ciclo Formativo Básico PretaLab.</p>
      </div>
    </>
  )
}

export default About