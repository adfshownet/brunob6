import { useState, useEffect, useCallback } from 'react'
import styles from './Navbar.module.css'
import { useActiveSection } from '../../hooks/useActiveSection'
import artist from '../../data/artist'

const NAV_LINKS = [
  { id: 'sobre',   label: 'Sobre'   },
  { id: 'musicas', label: 'Músicas' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'shows',   label: 'Shows'   },
  { id: 'contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(NAV_LINKS.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={styles.inner}>
        <button
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
        >
          {artist.name}
        </button>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  className={`${styles.navLink} ${active === link.id ? styles.navLinkActive : ''}`}
                  onClick={() => scrollTo(link.id)}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={artist.social.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn--primary ${styles.ctaBtn}`}
          aria-label="Ouvir Bruno B6 no Spotify"
        >
          Ouvir agora
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Menu mobile">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  className={`${styles.mobileLink} ${active === link.id ? styles.navLinkActive : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={artist.social.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn--primary ${styles.mobileCta}`}
                onClick={() => setMenuOpen(false)}
              >
                Ouvir agora
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
