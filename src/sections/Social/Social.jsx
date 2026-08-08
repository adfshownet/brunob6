import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Social.module.css'
import SocialIcons from '../../components/SocialIcons/SocialIcons'
import artist from '../../data/artist'

export default function Social() {
  const [ref, visible] = useFadeIn()

  return (
    <section className={`section section--alt ${styles.section}`} aria-label="Redes sociais">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${styles.content}`}>
          <h2 className="section__title"><span>Siga</span> Bruno B6</h2>
          <p className="section__subtitle">
            Acompanhe as novidades nas redes sociais
          </p>
          <SocialIcons size="lg" className={styles.icons} />

          {/* CTA principal para streaming */}
          <a
            href={artist.social.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn--primary ${styles.cta}`}
            aria-label={`Seguir ${artist.name} no Spotify`}
          >
            🎵 Seguir no Spotify
          </a>
        </div>
      </div>
    </section>
  )
}
