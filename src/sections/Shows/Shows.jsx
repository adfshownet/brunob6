import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Shows.module.css'
import artist from '../../data/artist'

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T12:00:00')
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export default function Shows() {
  const [ref, visible] = useFadeIn()
  const { clips } = artist

  return (
    <section id="shows" className={`section ${styles.section}`} aria-label="Clipes">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <h2 className="section__title"><span>Clipes</span></h2>
          <p className="section__subtitle">Vídeos e clipes</p>

          {clips.length === 0 ? (
            <div className={styles.empty} role="status">
              <span aria-hidden="true">🎬</span>
              <p>Nenhum clipe disponível no momento.</p>
              <p>Em breve teremos novos vídeos aqui!</p>
            </div>
          ) : (
            <div className={styles.videos}>
              <div className={styles.videoGrid}>
                {clips.map((video) => (
                  <div key={video.id} className={styles.videoWrap}>
                    <iframe
                      src={video.src}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className={styles.videoFrame}
                    />
                    <p className={styles.videoLabel}>{video.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
