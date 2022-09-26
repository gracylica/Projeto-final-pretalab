import devImg from '../../assets/web-developer.svg'
import softImg from '../../assets/soft-skills.svg'
import styles from '../About/about.module.css'

function About() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Aulas gravadas que irão te preparar para sua primeira experiência como dev
        </h1>
        <img src={devImg} />
      </div>
      <div className={styles.subtitulo}>
        <img src={softImg} />
        <p>Aprenda comigo as soft e hard skills ideais para te ajudar migrar de carreira e se tornar uma dev front-end jr. As aulas mostram um passo a passo coerente, sem enrolação e com muita mão no código.</p>
      </div>
    </>
  )
}

export default About