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
    short: 'Bruno B6 emergiu como uma força inovadora na cena musical brasileira. Sua jornada artística começou com influências variadas, desde o rock e o reggae, mas foi no rap que encontrou sua verdadeira voz.', // [PLACEHOLDER]
    long: `Com uma trajetória marcada pela evolução e experimentação, Bruno B6 está sempre expandindo seu repertório musical, trazendo em suas canções uma expressão autêntica de sua jornada pessoal.
Comentando sobre sua identidade artística, Bruno B6 compartilha: "Minha jornada musical sempre foi uma busca pela verdade e autenticidade. A música me permite compartilhar minha experiência de vida de uma forma nova e emocionante. Estou empolgado para continuar explorando novos horizontes criativos com meus fãs."
Para mais informações e entrevistas, entre em contato com: Bruno B6 nas redes sociais: Instagram: @brunob6oficial Facebook: @brunob6
Bruno B6 é um talentoso rapper brasileiro, conhecido por sua habilidade única de mesclar diversos gêneros musicais em suas composições. Sua música é uma reflexão autêntica de sua verdade e espiritualidade. Com uma paixão pela narrativa e uma voz distintamente cativante, Bruno B6 continua a desafiar fronteiras e inspirar através de sua arte.`, // [PLACEHOLDER]
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
      cover: 'https://i.scdn.co/image/ab6761610000f178e792afe1dce7b256e63f67e3', // capa do single
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
      cover: 'https://i.scdn.co/image/ab6761610000f178e792afe1dce7b256e63f67e3',
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
      cover: 'https://i.scdn.co/image/ab6761610000f178e792afe1dce7b256e63f67e3',
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
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
    email: 'contato@brunob6.com', // exibido como fallback
  },
}

export default artist
