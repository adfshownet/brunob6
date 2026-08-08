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
  const { shows } = artist

  return (
    <section id="shows" className={`section ${styles.section}`} aria-label="Agenda de shows">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <h2 className="section__title"><span>Shows</span></h2>
          <p className="section__subtitle">Agenda de apresentações</p>

          {shows.length === 0 ? (
            <div className={styles.empty} role="status">
              <span aria-hidden="true">🎸</span>
              <p>Nenhum show agendado no momento.</p>
              <p>Fique de olho nas redes sociais para novidades!</p>
            </div>
          ) : (
            <ul className={styles.list} aria-label="Lista de shows">
              {shows.map((show) => (
                <li key={show.id} className={styles.item}>
                  <div className={styles.date}>
                    <time dateTime={show.date}>{formatDate(show.date)}</time>
                  </div>
                  <div className={styles.info}>
                    <strong className={styles.venue}>{show.venue}</strong>
                    <span className={styles.city}>{show.city}</span>
                  </div>
                  <div className={styles.action}>
                    {show.soldOut ? (
                      <span className={styles.soldOut} aria-label="Esgotado">Esgotado</span>
                    ) : (
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary"
                        aria-label={`Comprar ingresso para ${show.venue} em ${show.city}`}
                      >
                        Ingressos
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
