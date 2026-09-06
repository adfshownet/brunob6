import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Live.module.css'
const liveVideo = '/Aftermovie%20Bruno%20B6.mov'

export default function Live() {
  const [ref, visible] = useFadeIn()

  return (
    <section id="ao-vivo" className={`section ${styles.section}`} aria-label="Ao Vivo">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <h2 className="section__title"><span>Ao Vivo</span></h2>
          <div className={styles.videoWrap}>
            <video controls preload="metadata" playsInline className={styles.video} title="Aftermovie Bruno B6">
              <source src={liveVideo} type="video/mp4" />
              Seu navegador não suporta a reprodução deste vídeo.
            </video>
            <h3 className={styles.videoTitle}>Estúdio Forno</h3>
          </div>
        </div>
      </div>
    </section>
  )
}