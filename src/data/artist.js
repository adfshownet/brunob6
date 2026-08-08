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
  tagline: 'Som que atravessa asfalto.',  // [PLACEHOLDER] Frase de efeito / slogan
  genre: 'POP ROCK',
  origin: 'São Paulo, SP — Brasil',  // [PLACEHOLDER] Cidade/estado real

  // ─── BIOGRAFIA ─────────────────────────────────────────────────────────────
  bio: {
    short: 'Bruno B6 é um artista de POP ROCK nascido nas ruas de São Paulo. Misturando batidas urbanas com melodias afiadas, seu som fala direto ao coração da galera.', // [PLACEHOLDER]
    long: `Bruno B6 começou a tocar ainda adolescente, influenciado pelo rock nacional e pela energia das ruas. Com mais de uma década de palco, lançou três álbuns independentes e conquistou uma base fiel de fãs. Suas letras falam de amor, liberdade e resistência — temas que ressoam em qualquer cidade.

Hoje, Bruno B6 está em plena ascensão, com shows pelo Brasil e lançamentos constantes nas plataformas digitais. O projeto une a autenticidade do rock com a acessibilidade do pop, criando uma identidade sonora única no cenário independente brasileiro.`, // [PLACEHOLDER]
    highlights: [
      { year: '2015', text: 'Primeiro show autoral no Clash Club, SP' }, // [PLACEHOLDER]
      { year: '2018', text: 'Lançamento do EP "Asfalto"' },              // [PLACEHOLDER]
      { year: '2020', text: 'Álbum "Cidade Urgente" — 500k streams'  },  // [PLACEHOLDER]
      { year: '2022', text: 'Turnê nacional com 30 cidades'           },  // [PLACEHOLDER]
      { year: '2024', text: 'Single "Neon" estreia no Top 50 BR'      },  // [PLACEHOLDER]
    ],
  },

  // ─── FOTO DO ARTISTA ───────────────────────────────────────────────────────
  // [PLACEHOLDER] Substitua pelos caminhos reais das fotos (coloque em src/assets/images/)
  photos: {
    hero: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80',   // foto hero principal
    about: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',  // foto seção sobre
  },

  // ─── DISCOGRAFIA ───────────────────────────────────────────────────────────
  // [PLACEHOLDER] Adicione/remova álbuns e singles conforme necessário
  discography: [
    {
      id: 1,
      type: 'album',           // 'album' | 'single' | 'ep'
      title: 'Cidade Urgente',
      year: '2020',
      cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80', // [PLACEHOLDER] capa real
      // [PLACEHOLDER] Embed do Spotify: abra o Spotify Web → Share → Embed → copie o src do iframe
      spotifyEmbed: 'https://open.spotify.com/embed/album/ALBUM_ID?utm_source=generator',
      links: {
        spotify: 'https://open.spotify.com/album/ALBUM_ID',   // [PLACEHOLDER]
        youtube: 'https://youtube.com/playlist?list=LIST_ID', // [PLACEHOLDER]
        deezer:  'https://www.deezer.com/album/ALBUM_ID',      // [PLACEHOLDER]
      },
    },
    {
      id: 2,
      type: 'single',
      title: 'Neon',
      year: '2024',
      cover: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80', // [PLACEHOLDER]
      spotifyEmbed: 'https://open.spotify.com/embed/track/TRACK_ID?utm_source=generator',
      links: {
        spotify: 'https://open.spotify.com/track/TRACK_ID', // [PLACEHOLDER]
        youtube: 'https://youtube.com/watch?v=VIDEO_ID',    // [PLACEHOLDER]
      },
    },
    {
      id: 3,
      type: 'ep',
      title: 'Asfalto',
      year: '2018',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80', // [PLACEHOLDER]
      spotifyEmbed: 'https://open.spotify.com/embed/album/EP_ID?utm_source=generator',
      links: {
        spotify: 'https://open.spotify.com/album/EP_ID', // [PLACEHOLDER]
      },
    },
  ],

  // ─── GALERIA ───────────────────────────────────────────────────────────────
  // [PLACEHOLDER] Substitua por fotos/vídeos reais do artista
  gallery: [
    { id: 1, type: 'photo', src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80', alt: 'Show ao vivo' },
    { id: 2, type: 'photo', src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80', alt: 'Performance no palco' },
    { id: 3, type: 'photo', src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80', alt: 'Festival' },
    { id: 4, type: 'photo', src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80', alt: 'Ensaio' },
    { id: 5, type: 'photo', src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80', alt: 'Estúdio' },
    { id: 6, type: 'photo', src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80', alt: 'Luz de palco' },
    // [PLACEHOLDER] Vídeos do YouTube — adicione com type: 'video' e src: 'https://www.youtube.com/embed/VIDEO_ID'
  ],

  // ─── AGENDA DE SHOWS ───────────────────────────────────────────────────────
  // [PLACEHOLDER] Atualize as datas conforme a agenda real. Deixe o array vazio ([]) quando não houver shows.
  shows: [
    {
      id: 1,
      date: '2025-09-20',
      city: 'São Paulo, SP',
      venue: 'Clash Club',
      ticketUrl: 'https://www.ingressorapido.com.br/', // [PLACEHOLDER]
      soldOut: false,
    },
    {
      id: 2,
      date: '2025-10-04',
      city: 'Rio de Janeiro, RJ',
      venue: 'Circo Voador',
      ticketUrl: 'https://www.ingresso.com/',          // [PLACEHOLDER]
      soldOut: false,
    },
    {
      id: 3,
      date: '2025-10-18',
      city: 'Curitiba, PR',
      venue: 'Ópera de Arame',
      ticketUrl: 'https://www.sympla.com.br/',         // [PLACEHOLDER]
      soldOut: true,
    },
  ],

  // ─── REDES SOCIAIS ─────────────────────────────────────────────────────────
  // [PLACEHOLDER] Substitua pelos links reais
  social: {
    instagram: 'https://www.instagram.com/brunob6oficial',
    tiktok:    'https://www.tiktok.com/@brunob6',
    youtube:   'https://www.youtube.com/@brunob6',
    spotify:   'https://open.spotify.com/artist/brunob6',
    facebook:  '',  // deixe vazio para ocultar o ícone
  },

  // ─── CONTATO ───────────────────────────────────────────────────────────────
  contact: {
    // [PLACEHOLDER] Crie uma conta gratuita em https://formspree.io e substitua o endpoint abaixo
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
    email: 'contato@brunob6.com.br', // exibido como fallback
  },
}

export default artist
