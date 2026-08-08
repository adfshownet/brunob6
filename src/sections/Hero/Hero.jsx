import styles from './Hero.module.css'
import artist from '../../data/artist'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} aria-label="Capa">
      {/* Imagem de fundo com lazy loading via CSS — carregada em background-image */}
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${artist.photos.hero})` }}
        role="img"
        aria-label={`Foto de ${artist.name}`}
      />
      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        <p className={styles.genre}>{artist.genre}</p>
        <h1 className={styles.name}>{artist.name}</h1>
        <p className={styles.tagline}>{artist.tagline}</p>

        <div className={styles.actions}>
          <a
            href={artist.social.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            aria-label={`Ouvir ${artist.name} no Spotify`}
          >
            🎵 Ouvir agora
          </a>
          <button
            className="btn btn--outline"
            onClick={() => scrollTo('shows')}
          >
            📅 Ver shows
          </button>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
