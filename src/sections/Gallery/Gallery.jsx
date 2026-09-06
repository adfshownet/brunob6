import { useState, useRef, useEffect } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Gallery.module.css'
import artist from '../../data/artist'

export default function Gallery() {
  const [ref, visible] = useFadeIn()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const lightboxRef = useRef(null)

  // Move foco para o lightbox ao abrir — necessário para capturar Escape via teclado
  useEffect(() => {
    if (lightboxIndex !== null) lightboxRef.current?.focus()
  }, [lightboxIndex])

  const photos = artist.gallery.filter((g) => g.type === 'photo')
  const videos = artist.gallery.filter((g) => g.type === 'video')

  function prev() {
    setLightboxIndex((i) => (i === 0 ? photos.length - 1 : i - 1))
  }

  function next() {
    setLightboxIndex((i) => (i === photos.length - 1 ? 0 : i + 1))
  }

  return (
    <section id="galeria" className={`section section--alt ${styles.section}`} aria-label="Galeria">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <h2 className="section__title"><span>Galeria</span></h2>
          <p className="section__subtitle">Fotos e vídeos</p>

          {/* Grid de fotos */}
          <div className={styles.grid}>
            {photos.map((photo, idx) => (
              <button
                key={photo.id}
                className={styles.item}
                onClick={() => setLightboxIndex(idx)}
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
      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${photos[lightboxIndex].alt}`}
          onClick={() => setLightboxIndex(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setLightboxIndex(null)
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
          }}
          tabIndex={0}
        >
          <button
            className={styles.lightboxClose}
            aria-label="Fechar"
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex(null)
            }}
          >
            ✕
          </button>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
          >
            ‹
          </button>

          <img
            src={photos[lightboxIndex].src}
            alt={photos[lightboxIndex].alt}
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            aria-label="Próxima"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

/* prev/next implemented inside component */
