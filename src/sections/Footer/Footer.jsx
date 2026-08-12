import styles from './Footer.module.css'
import SocialIcons from '../../components/SocialIcons/SocialIcons'
import artist from '../../data/artist'

const YEAR = new Date().getFullYear()

const QUICK_LINKS = [
  { id: 'sobre',   label: 'Sobre'       },
  { id: 'musicas', label: 'Músicas'     },
  { id: 'galeria', label: 'Galeria'     },
  { id: 'shows',   label: 'Clipes'      },
  { id: 'contato', label: 'Contato'     },
]

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Logo / Nome */}
        <div className={styles.brand}>
          <p className={styles.name}>{artist.name}</p>
          <p className={styles.genre}>{artist.genre}</p>
          <SocialIcons size="sm" className={styles.social} />
        </div>

        {/* Links rápidos */}
        <nav className={styles.links} aria-label="Links do rodapé">
          <p className={styles.linksTitle}>Navegação</p>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.id}>
                <button className={styles.link} onClick={() => scrollTo(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contato */}
        <div className={styles.contact}>
          <p className={styles.linksTitle}>Contato</p>
          <a href={`mailto:${artist.contact.email}`} className={styles.email}>
            {artist.contact.email}
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {YEAR} {artist.name}. Todos os direitos reservados.
        </p>
        {/* [PLACEHOLDER] Substitua pelo nome real do desenvolvedor/agência */}
        <p>Site desenvolvido por <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Dev</a></p>
      </div>
    </footer>
  )
}
