import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Gallery.module.css'
import artist from '../../data/artist'

export default function Gallery() {
  const [ref, visible] = useFadeIn()
  const [lightbox, setLightbox] = useState(null)

  const photos = artist.gallery.filter((g) => g.type === 'photo')
  const videos = artist.gallery.filter((g) => g.type === 'video')

  return (
    <section id="galeria" className={`section section--alt ${styles.section}`} aria-label="Galeria">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <h2 className="section__title"><span>Galeria</span></h2>
          <p className="section__subtitle">Fotos e vídeos</p>

          {/* Grid de fotos */}
          <div className={styles.grid}>
            {photos.map((photo) => (
              <button
                key={photo.id}
                className={styles.item}
                onClick={() => setLightbox(photo)}
                aria-label={`Ampliar foto: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className={styles.img}
                />
                <div className={styles.overlay} aria-hidden="true">
                  <span>🔍</span>
                </div>
              </button>
            ))}
          </div>

          {/* Vídeos do YouTube */}
          {videos.length > 0 && (
            <div className={styles.videos}>
              <h3 className={styles.videoTitle}>Vídeos</h3>
              <div className={styles.videoGrid}>
                {videos.map((v) => (
                  <div key={v.id} className={styles.videoWrap}>
                    <iframe
                      src={v.src}
                      title={v.alt}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className={styles.videoFrame}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${lightbox.alt}`}
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === 'Escape' && setLightbox(null)}
          tabIndex={0}
        >
          <button className={styles.lightboxClose} aria-label="Fechar">✕</button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
