# 🏛️ Glória Menezes - Site Advocacia do Agronegócio

Site institucional moderno e responsivo para escritório de advocacia especializado em Direito do Agronegócio, com foco em produtores rurais endividados e soluções jurídicas para o campo.

## 🎯 Características Principais

### 📱 Design Responsivo
- Layout otimizado para desktop, tablet e mobile
- Vídeo de background adaptativo (formato e tamanho diferentes por dispositivo)
- Componentes com animações suaves usando Framer Motion

### 🎨 Interface Moderna
- **Hero Section**: Vídeo de fundo com overlay, texto destacado e CTA para WhatsApp
- **Sobre**: Carrossel de imagens com navegação estilo Instagram
- **Serviços**: 6 cards com ícones e descrições detalhadas
- **Áreas de Atuação**: 8 áreas especializadas do escritório
- **Depoimentos**: Feedbacks de clientes
- **FAQ**: Perguntas frequentes com accordion
- **Contato**: Formulário integrado com WhatsApp

### 💼 Áreas de Atuação
1. Crédito Rural e Endividamento
2. Direito Agrário e Imobiliário
3. Gestão Ambiental e Sustentabilidade
4. Planejamento Sucessório e Societário
5. Propriedade Intelectual e Inovação
6. Direito do Trabalho no Agronegócio
7. Direito Previdenciário Rural
8. Direito Tributário do Agronegócio

### ⚡ Tecnologias Utilizadas
- **Framework**: Next.js 15.3.0 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS 3.3.3
- **Animações**: Framer Motion
- **Componentes UI**: Radix UI + shadcn/ui
- **Carrossel**: Embla Carousel
- **Ícones**: Lucide React
- **Formulários**: React Hook Form + Zod (validação)

### 🎪 Recursos Especiais
- **Carrossel de Imagens**: Navegação manual e automática com indicadores visuais
- **Integração WhatsApp**: Formulário de contato envia mensagens formatadas direto para o WhatsApp
- **Otimização de Vídeo**: Múltiplos formatos (WebM + MP4) e tamanhos (desktop/mobile)
- **SEO Friendly**: Metadados otimizados e estrutura semântica
- **Performance**: Lazy loading, otimização de imagens, code splitting

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn ou pnpm

### 1️⃣ Instalação

```bash
# Clone o repositório (ou navegue até a pasta do projeto)
cd site-GM

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### 2️⃣ Executar em Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O site estará disponível em: **http://localhost:3000**

### 3️⃣ Verificar Erros (Opcional)

```bash
# Verificar erros de TypeScript
npx tsc --noEmit

# Verificar erros de linting
npm run lint
```

## 📦 Build para Produção

### Build Estático (Recomendado para Hostgator)

```bash
# Gera build de produção + exporta páginas estáticas
npm run build

# Os arquivos estarão na pasta 'out/'
# Upload da pasta 'out/' para o servidor
```

### Estrutura do Build
```
out/
├── index.html              # Página principal
├── _next/                  # Assets otimizados (JS, CSS, imagens)
├── sobre.html              # Páginas estáticas
├── contato.html
└── ...
```

### Preview Local do Build

```bash
# Após rodar 'npm run build'
npx serve out

# Acesse http://localhost:3000
```

## 📁 Estrutura do Projeto

```
site-GM/
├── app/                    # App Router do Next.js
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Estilos globais
│   └── api/                # API Routes
│       └── contact/
│           └── route.ts    # Endpoint de contato
├── components/             # Componentes React
│   ├── hero.tsx            # Seção hero com vídeo
│   ├── about.tsx           # Sobre com carrossel
│   ├── services.tsx        # Serviços oferecidos
│   ├── areas.tsx           # Áreas de atuação
│   ├── testimonials.tsx    # Depoimentos
│   ├── faq.tsx             # Perguntas frequentes
│   ├── contact.tsx         # Formulário de contato
│   ├── header.tsx          # Cabeçalho fixo
│   ├── footer.tsx          # Rodapé
│   ├── whatsapp-button.tsx # Botão flutuante WhatsApp
│   └── ui/                 # Componentes UI reutilizáveis
│       ├── carousel.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── lib/                    # Utilitários
│   ├── utils.ts            # Funções auxiliares
│   └── types.ts            # Tipos TypeScript
├── public/                 # Assets estáticos
│   ├── logo.png
│   ├── lawyer-1.jpg        # Fotos do carrossel
│   ├── lawyer-2.png
│   ├── lawyer-3.jpg
│   ├── lawyer_main.png     # Imagem hero
│   ├── background-video.webm
│   ├── background-video.mp4
│   ├── background-video-small.webm
│   ├── background-video-small.mp4
│   └── background-poster.jpg
├── next.config.js          # Configuração Next.js
├── tailwind.config.ts      # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
└── package.json            # Dependências
```

## 🎨 Paleta de Cores

```css
--dark-green: #1a4d2e      /* Verde escuro principal */
--light-green: #4f9d69     /* Verde claro destaque */
--brown: #a0826d           /* Marrom/bege */
--light-beige: #f8f4e6     /* Bege claro */
--background: #181817      /* Preto suave (header/footer) */
```

## 🔧 Configurações Importantes

### next.config.js
```javascript
output: 'export'  // Gera build estático
images: {
  unoptimized: true  // Necessário para build estático
}
```

### Vídeos de Background
- **Desktop**: 1920x1080, WebM (VP9) + MP4 (H.264)
- **Mobile**: 720x900, WebM (VP9) + MP4 (H.264)
- Ver `OTIMIZACAO-VIDEO.md` para instruções de otimização

## 📱 Integração WhatsApp

O formulário de contato formata automaticamente a mensagem e abre o WhatsApp:

```
*Nova Consulta Jurídica*

👤 *Nome:* [nome]
📧 *Email:* [email]
📱 *Telefone:* [telefone]
📋 *Assunto:* [assunto]

📝 *Mensagem:*
[mensagem]
```

**Número**: (62) 98214-4754

## 🌐 Deploy

### Hostgator (Recomendado)
1. Execute `npm run build`
2. Faça upload da pasta `out/` para o diretório `public_html/`
3. Configure domínio e SSL no painel

### Vercel (Alternativa)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify (Alternativa)
1. Conecte o repositório
2. Build command: `npm run build`
3. Publish directory: `out`

## 📝 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção + exportação estática
npm run start        # Inicia servidor de produção (não funciona com output:export)
npm run lint         # Executa ESLint
```

## ⚠️ Observações Importantes

1. **Imagens do Carrossel**: Certifique-se de ter as imagens `lawyer-1.jpg`, `lawyer-2.png` e `lawyer-3.jpg` na pasta `/public`

2. **Vídeos de Background**: Os vídeos são carregados condicionalmente baseado no tamanho da tela. Otimize-os conforme `OTIMIZACAO-VIDEO.md`

3. **Build Estático**: O projeto está configurado para gerar build estático (`output: 'export'`), ideal para hospedagem simples

4. **API Routes**: Com `output: 'export'`, as API routes não funcionam em produção. O formulário usa integração direta com WhatsApp

## 🐛 Solução de Problemas

### Erro: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Vídeo não carrega
- Verifique se os arquivos `.webm` e `.mp4` estão na pasta `/public`
- Teste com diferentes navegadores

### Build falha
```bash
# Limpar cache do Next.js
rm -rf .next
npm run build
```

## 📄 Licença

© 2024 Glória Menezes Advocacia. Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando Next.js + TypeScript + Tailwind CSS**
