# Bruno B6 — Site Oficial 01

Site institucional do artista **Bruno B6** (POP ROCK), construído com React 18 + Vite.
Layout *one-pager* com seções navegáveis, design urbano/street, otimizado para mobile.

---

## 🚀 Como rodar localmente  

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento (localhost:5173)
npm run dev
```

Abra http://localhost:5173 no navegador.

---

## 🔨 Como fazer o build para produção

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta **`dist/`**.

Para testar o build localmente antes de subir:

```bash
npm run preview
```

---

## 🌐 Deploy na LocaWeb (hospedagem compartilhada)

1. Rode `npm run build` para gerar a pasta `dist/`.
2. Acesse o **Gerenciador de Arquivos** ou use um cliente **FTP** (ex: FileZilla).
3. Conecte ao servidor LocaWeb com as credenciais do painel.
4. Faça upload de **todo o conteúdo** da pasta `dist/` para o diretório raiz do domínio:
   ```
   /home/brunob61/public_html/
   ```
   > ⚠️ Atenção: faça upload do *conteúdo* de `dist/`, não da pasta `dist/` em si.
5. O arquivo `.htaccess` (da pasta `public/`) já é copiado automaticamente para `dist/`.
   Ele é necessário apenas se você decidir usar BrowserRouter no futuro.
   Com o HashRouter padrão, não é necessário nenhuma configuração extra no servidor.

### Verificação pós-deploy

Acesse `https://seudominio.com.br/` e verifique:
- [ ] Página carrega corretamente
- [ ] Navegação entre seções funciona
- [ ] Imagens carregam (substituir placeholders pelos arquivos reais)
- [ ] Formulário de contato envia (configurar Formspree)

---

## ✏️ Como editar as informações do artista

**Edite APENAS o arquivo `src/data/artist.js`** — ele centraliza todos os dados do site.
Não é necessário mexer em nenhum componente React.

| O que editar | Onde está no arquivo |
|---|---|
| Nome artístico, slogan, gênero | `name`, `tagline`, `genre` |
| Biografia curta e longa | `bio.short`, `bio.long` |
| Timeline de carreira | `bio.highlights` |
| Foto hero e foto "Sobre" | `photos.hero`, `photos.about` |
| Álbuns, singles, EPs | `discography[]` — adicione/remova objetos |
| Embeds do Spotify | `discography[].spotifyEmbed` |
| Galeria de fotos/vídeos | `gallery[]` |
| Agenda de shows | `shows[]` — deixe `[]` se não houver shows |
| Links de redes sociais | `social.*` |
| Endpoint do formulário | `contact.formspreeEndpoint` |

### Como configurar o formulário de contato (Formspree)

1. Acesse https://formspree.io e crie uma conta gratuita.
2. Crie um novo formulário e copie o endpoint gerado (ex: `https://formspree.io/f/abcdefgh`).
3. Cole o endpoint em `src/data/artist.js`, campo `contact.formspreeEndpoint`.
4. Rode o build novamente e faça o re-deploy.

---

## 📁 Estrutura de pastas

```
brunob6-site/
├── public/
│   ├── favicon.svg          # Favicon — substitua pelo real
│   ├── robots.txt
│   └── .htaccess            # Fallback Apache para BrowserRouter
├── src/
│   ├── data/
│   │   └── artist.js        # ← EDITE AQUI: todos os dados do artista
│   ├── styles/
│   │   └── globals.css      # Tema global (cores, tipografia, variáveis CSS)
│   ├── hooks/
│   │   ├── useFadeIn.js     # Animação de entrada ao rolar
│   │   └── useActiveSection.js  # Detecção de seção ativa para o menu
│   ├── components/
│   │   ├── Navbar/          # Menu fixo com scroll suave
│   │   ├── BackToTop/       # Botão "voltar ao topo"
│   │   └── SocialIcons/     # Ícones de redes sociais
│   ├── sections/
│   │   ├── Hero/            # Capa principal
│   │   ├── About/           # Sobre / Biografia
│   │   ├── Discography/     # Músicas / Discografia
│   │   ├── Gallery/         # Galeria de fotos e vídeos
│   │   ├── Shows/           # Agenda de shows
│   │   ├── Social/          # Redes sociais
│   │   ├── Contact/         # Formulário de contato
│   │   └── Footer/          # Rodapé
│   ├── App.jsx              # Componente raiz
│   └── main.jsx             # Ponto de entrada React
├── index.html               # HTML base com meta tags SEO
├── vite.config.js           # Configuração do Vite
└── package.json
```

---

## ⚙️ Decisões técnicas

| Decisão | Justificativa |
|---|---|
| **React 18 + Vite** | Build estático rápido, compatível com hospedagem compartilhada sem Node em produção |
| **HashRouter** | LocaWeb não garante suporte a rewrites no Apache; HashRouter funciona em qualquer servidor estático sem configuração |
| **CSS Modules** | Escopo local por componente, sem conflito de classes, sem dependência de runtime, performance máxima |
| **Fontes Google** | Bebas Neue (display/urbano) + Inter (corpo/legível) — máximo 2 famílias conforme diretrizes UX |
| **Formspree** | Backend zero para formulários; gratuito até 50 envios/mês, suficiente para site de artista |
| **Unsplash (placeholders)** | Imagens temporárias realistas, facilmente substituíveis pelos arquivos reais |
| **IntersectionObserver** | Animações de fade-in e detecção de seção ativa sem dependência de biblioteca |
| **base: './'** | Caminhos relativos garantem funcionamento em qualquer subpasta sem ajuste |

---

## 📋 Próximos passos — Checklist para ir ao ar

- [ ] Substituir foto hero (`photos.hero` em `artist.js`) por foto real do artista
- [ ] Substituir foto "Sobre" (`photos.about`) por foto real
- [ ] Preencher biografia real (`bio.short`, `bio.long`, `bio.highlights`)
- [ ] Adicionar discografia real com embeds do Spotify (`discography[]`)
- [ ] Adicionar fotos reais na galeria (`gallery[]`)
- [ ] Confirmar agenda de shows (`shows[]`)
- [ ] Atualizar links de redes sociais (`social.*`)
- [ ] Configurar Formspree e atualizar `contact.formspreeEndpoint`
- [ ] Criar og-image.jpg (1200×630px) e colocar em `public/`
- [ ] Atualizar meta tags no `index.html` com URL real do domínio
- [ ] Atualizar Schema.org em `index.html` com links reais das redes
- [ ] Substituir favicon por logo real em `public/favicon.svg` (ou `.ico`)
- [ ] Substituir créditos do footer (`Footer.jsx`) com nome/link do desenvolvedor real
- [ ] Rodar `npm run build` e fazer upload da pasta `dist/` para a LocaWeb
