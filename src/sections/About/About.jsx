import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './About.module.css'
import artist from '../../data/artist'

export default function About() {
  const [ref, visible] = useFadeIn()

  return (
    <section id="sobre" className={`section ${styles.about}`} aria-label="Sobre">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${styles.grid}`}>
          {/* Foto */}
          <div className={styles.imageWrap}>
            <img
              src={artist.photos.about}
              alt={`Foto de ${artist.name}`}
              loading="lazy"
              width={500}
              height={600}
              className={styles.image}
            />
            <div className={styles.imageBorder} aria-hidden="true" />
          </div>

          {/* Texto */}
          <div className={styles.text}>
            <p className={styles.label}>Quem é</p>
            <h2 className="section__title">
              <span>{artist.name.split(' ')[0]}</span>{' '}
              {artist.name.split(' ').slice(1).join(' ')}
            </h2>
            <p className={styles.bio}>{artist.bio.short}</p>
            <p className={styles.bioLong}>{artist.bio.long}</p>

            {/* Timeline de destaques */}
            <div className={styles.timeline} aria-label="Carreira">
              {artist.bio.highlights.map((item) => (
                <div key={item.year} className={styles.timelineItem}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <span className={styles.timelineText}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
