import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import BackToTop from './components/BackToTop/BackToTop'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Discography from './sections/Discography/Discography'
import Gallery from './sections/Gallery/Gallery'
import Shows from './sections/Shows/Shows'
import Social from './sections/Social/Social'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

/*
 * DECISÃO TÉCNICA: HashRouter
 * ─────────────────────────────
 * Usamos HashRouter em vez de BrowserRouter porque a LocaWeb em hospedagem
 * compartilhada usa Apache sem suporte garantido a .htaccess para rewrite de
 * SPA. Com HashRouter, toda a navegação acontece no fragmento (#) da URL,
 * funcionando 100% em qualquer servidor estático sem configuração adicional.
 *
 * Se a LocaWeb permitir .htaccess, pode-se mudar para BrowserRouter e
 * usar o .htaccess incluído no projeto (public/.htaccess).
 */
export default function App() {
  return (
    <HashRouter>
      {/* Navbar fixo no topo */}
      <Navbar />

      {/* Conteúdo principal — one-pager com seções navegáveis */}
      <main>
        <Hero />
        <About />
        <Discography />
        <Gallery />
        <Shows />
        <Social />
        <Contact />
      </main>

      <Footer />

      {/* Botão "voltar ao topo" flutuante */}
      <BackToTop />
    </HashRouter>
  )
}
