/**
 * ARQUIVO CENTRAL DE DADOS DO ARTISTA
 * ====================================
 * Edite APENAS este arquivo para atualizar todas as informações do site.
 * Não é necessário mexer em nenhum componente React.
 *
 * Campos marcados com [PLACEHOLDER] devem ser substituídos pelos dados reais.
 */

const artist = {
  // ─── IDENTIDADE BÁSICA ─────────────────────────────────────────────────────
  name: 'Bruno B6',              // [PLACEHOLDER] Nome artístico real
  tagline: 'A atitude do Rap com o peso do Rock.',  // [PLACEHOLDER] Frase de efeito / slogan
  genre: 'RAP ROCK',
  origin: 'São Paulo, SP — Brasil',  // [PLACEHOLDER] Cidade/estado real

  // ─── BIOGRAFIA ─────────────────────────────────────────────────────────────
  bio: {
    short: 'Bruno B6 é um rapper brasileiro que transforma experiências e diferentes influências musicais em uma expressão autêntica.', // [PLACEHOLDER]
    long: `Entre o rap, o rock e o reggae, constrói uma sonoridade própria, marcada por narrativas pessoais, espiritualidade e uma voz singular.
Em constante evolução, Bruno B6 explora novos caminhos criativos e busca, através da música, criar conexões verdadeiras com quem acompanha seu trabalho.

CONTATO
Instagram · @brunob6oficial`, // [PLACEHOLDER]
    highlights: [],
  },

  // ─── FOTO DO ARTISTA ───────────────────────────────────────────────────────
  // [PLACEHOLDER] Substitua pelos caminhos reais das fotos (coloque em src/assets/images/)
  photos: {
    hero: '/DSC07475.jpg',   // foto hero principal
    about: '/DSC07660.jpg',  // foto seção sobre
  },

  // ─── DISCOGRAFIA ───────────────────────────────────────────────────────────
  // [PLACEHOLDER] Adicione/remova álbuns e singles conforme necessário
  discography: [
    {
      id: 1,
      type: 'single',           // 'album' | 'single' | 'ep'
      title: 'Viver Pra Vencer',
      year: '2024',
      cover: '/viver-pra-vencer.jpg', // capa do single (atualizada localmente)
      // Embed do Spotify para a faixa fornecida
      spotifyEmbed: 'https://open.spotify.com/embed/track/2Z2m07PbboAiWu1LUAOUzm',
      links: {
        spotify: 'https://open.spotify.com/track/2Z2m07PbboAiWu1LUAOUzm?si=fd1caefd095f48be',
        youtube: 'https://youtube.com/watch?v=VIDEO_ID',    // [PLACEHOLDER]
        deezer:  'https://www.deezer.com/track/TRACK_ID',      // [PLACEHOLDER]
      },
    },
    {
      id: 2,
      type: 'single',
      title: 'Mulher Valente',
      year: '2024',
      cover: '/Mulher valente.jpg',
      spotifyEmbed: 'https://open.spotify.com/embed/track/1dfPGKAvhYgPTht836cwi1',
      links: {
        spotify: 'https://open.spotify.com/track/1dfPGKAvhYgPTht836cwi1?si=4af6b16c9e67409e',
        youtube: 'https://youtube.com/watch?v=VIDEO_ID',
      },
    },
    {
      id: 3,
      type: 'single',
      title: 'Eu Tô Aqui',
      year: '2021',
      cover: '/Eu to aqui.jpg',
      spotifyEmbed: 'https://open.spotify.com/embed/track/1F6alK8YopoNtnQAd1PjdI',
      links: {
        spotify: 'https://open.spotify.com/track/1F6alK8YopoNtnQAd1PjdI?si=7ac60ad886e049fc',
      },
    },
  ],

  // ─── GALERIA ───────────────────────────────────────────────────────────────
  // [PLACEHOLDER] Substitua por fotos/vídeos reais do artista
  gallery: [
    { id: 1, type: 'photo', src: '/galeria/2.jpg', alt: 'Show ao vivo' },
    { id: 2, type: 'photo', src: '/galeria/banda.jpeg', alt: 'Banda no palco' },
    { id: 3, type: 'photo', src: '/galeria/celular.jpg', alt: 'Foto com celular' },
    { id: 4, type: 'photo', src: '/galeria/DSC06985.jpg', alt: 'Show ao vivo' },
    { id: 5, type: 'photo', src: '/galeria/DSC07186.jpg', alt: 'Performance no palco' },
    { id: 6, type: 'photo', src: '/galeria/DSC07225.jpg', alt: 'Imagem de show' },
    { id: 7, type: 'photo', src: '/galeria/DSC07469.jpg', alt: 'Palco e luzes' },
    { id: 8, type: 'photo', src: '/galeria/mic.jpg', alt: 'Microfone' },
    { id: 9, type: 'photo', src: '/galeria/palco.jpeg', alt: 'Palco ao vivo' },
    { id: 10, type: 'photo', src: '/galeria/sentado.jpg', alt: 'Artista sentado' },
    { id: 11, type: 'photo', src: '/galeria/teste.jpeg', alt: 'Foto de galeria' },
  ],

  // ─── CLIPES ─────────────────────────────────────────────────────────────────────
  clips: [
    { id: 12, title: 'Mulher Valente', src: 'https://www.youtube.com/embed/7N6BjrCQpg0' },
    { id: 13, title: 'Quem Diria', src: 'https://www.youtube.com/embed/knC4yNYX4Cc' },
    { id: 14, title: 'Eu tô Aqui', src: 'https://www.youtube.com/embed/UiP_hvQ8g8M' },
  ],

  // ─── AGENDA DE SHOWS ───────────────────────────────────────────────────────
  // [PLACEHOLDER] Atualize as datas conforme a agenda real. Deixe o array vazio ([]) quando não houver shows.
  shows: [],


  // ─── REDES SOCIAIS ─────────────────────────────────────────────────────────
  // [PLACEHOLDER] Substitua pelos links reais
  social: {
    instagram: 'https://www.instagram.com/brunob6?igsh=bXU5aDkybDd6NmF3',
    tiktok:    'https://www.tiktok.com/@brunob6',
    youtube:   'https://www.youtube.com/user/b6tv2',
    spotify:   'https://open.spotify.com/artist/5kPA1tugTYedshhNXtdthE?si=FAOXmb3LQ5CD5KOodUV7nA&utm_source=copy-link&sci=spotify%3Acard-config%3A5UNdNeXBd0mEfXsuYDr7De',
    facebook:  '',  // deixe vazio para ocultar o ícone
  },

  // ─── CONTATO ───────────────────────────────────────────────────────────────
  contact: {
    // [PLACEHOLDER] Crie uma conta gratuita em https://formspree.io e substitua o endpoint abaixo
    formspreeEndpoint: 'https://formspree.io/f/maewpnvz',
    email: 'contato@brunob6.com', // exibido como fallback
  },
}

export default artist
