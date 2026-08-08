import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Discography.module.css'
import artist from '../../data/artist'

const TYPE_LABEL = { album: 'Álbum', single: 'Single', ep: 'EP' }
const PLATFORM_LINKS = [
  { key: 'spotify', label: 'Spotify' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'deezer',  label: 'Deezer'  },
]

export default function Discography() {
  const [active, setActive] = useState(artist.discography[0]?.id ?? null)
  const [ref, visible] = useFadeIn()
  const selected = artist.discography.find((d) => d.id === active)

  return (
    <section id="musicas" className={`section ${styles.section}`} aria-label="Discografia">
      <div className="container">
        <div className={`fade-in ${visible ? 'visible' : ''}`} ref={ref}>
          <p className={styles.label}>Discografia</p>
          <h2 className="section__title">
            <span>Músicas</span>
          </h2>
          <p className="section__subtitle">Álbuns, singles e EPs</p>

          {/* Grid de capas */}
          <div className={styles.grid}>
            {artist.discography.map((item) => (
              <button
                key={item.id}
                className={`${styles.card} ${active === item.id ? styles.cardActive : ''}`}
                onClick={() => setActive(item.id)}
                aria-pressed={active === item.id}
                aria-label={`${item.title} — ${TYPE_LABEL[item.type]} (${item.year})`}
              >
                <img
                  src={item.cover}
                  alt={`Capa de ${item.title}`}
                  loading="lazy"
                  className={styles.cover}
                />
                <div className={styles.cardInfo}>
                  <span className={styles.cardType}>{TYPE_LABEL[item.type]}</span>
                  <strong className={styles.cardTitle}>{item.title}</strong>
                  <span className={styles.cardYear}>{item.year}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Player e links */}
          {selected && (
            <div className={styles.player}>
              <iframe
                src={selected.spotifyEmbed}
                title={`Player — ${selected.title}`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className={styles.iframe}
              />
              <div className={styles.platformLinks}>
                <span>Ouvir em:</span>
                {PLATFORM_LINKS.filter(({ key }) => selected.links?.[key]).map(({ key, label }) => (
                  <a
                    key={key}
                    href={selected.links[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.platformLink}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
