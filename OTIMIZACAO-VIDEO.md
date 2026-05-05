# Otimização de Vídeos de Background

## Instalação do FFmpeg no Windows

### Opção 1: Download Manual (Recomendado)
1. Baixe FFmpeg: https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip
2. Extraia para `C:\ffmpeg`
3. Adicione ao PATH:
   - Abra PowerShell **como Administrador**
   - Execute: `setx /M PATH "$env:PATH;C:\ffmpeg\bin"`
4. Feche e abra o terminal novamente
5. Teste: `ffmpeg -version`

### Opção 2: Via Chocolatey (com Admin)
```powershell
# Abra PowerShell como Administrador
choco install ffmpeg -y
```

---

## 🌐 Ferramentas Online (Sem Instalar)

### CloudConvert - MP4 para WebM
https://cloudconvert.com/mp4-to-webm
- Codec: VP9
- Quality: 70-75% (desktop), 60-65% (mobile)
- Gratuito até 25 conversões/dia

### FreeConvert - Compressor de Vídeo
https://www.freeconvert.com/video-compressor
- Reduz tamanho do arquivo
- Ajusta resolução
- Totalmente gratuito

### Clideo - Compressor Simples
https://clideo.com/compress-video
- Compressão automática
- Interface muito simples

---

## Comandos FFmpeg para Otimização

### 1. Converter MP4 para WebM (Desktop - 16:9)
```bash
ffmpeg -i background-video.mp4 -c:v libvpx-vp9 -crf 35 -b:v 1.5M -c:a libopus -b:a 128k background-video.webm
```

### 2. Converter MP4 para WebM (Mobile - 4:5)
```bash
ffmpeg -i background-video-small.mp4 -c:v libvpx-vp9 -crf 38 -b:v 800k -c:a libopus -b:a 96k background-video-small.webm
```

### 3. Reduzir tamanho do MP4 Desktop
```bash
ffmpeg -i background-video.mp4 -vcodec h264 -crf 30 -preset slow -vf "scale=1920:1080" -r 24 -an background-video-optimized.mp4
```

### 4. Reduzir tamanho do MP4 Mobile (metade do tamanho)
```bash
ffmpeg -i background-video-small.mp4 -vcodec h264 -crf 32 -preset slow -vf "scale=720:900" -r 24 -an background-video-small-optimized.mp4
```

### 5. Criar imagem Poster (thumbnail de preview)
```bash
ffmpeg -i background-video.mp4 -ss 00:00:01 -vframes 1 -q:v 2 background-poster.jpg
```

## Estratégias Adicionais de Otimização

### Opção 1: Usar imagem estática em mobile
- Extrair frame do vídeo como JPG/WebP
- Usar apenas em mobile (economiza muito bandwidth)
- Vídeo apenas em desktop

### Opção 2: Lazy Loading
- Carregar vídeo apenas quando está visível
- Usar IntersectionObserver

### Opção 3: Adaptive Loading
- Detectar velocidade da conexão (navigator.connection)
- Carregar vídeo apenas em conexões rápidas
- Fallback para imagem em conexões lentas

## Configurações Recomendadas

### Desktop (16:9)
- Resolução: 1920x1080
- Bitrate: 1-1.5 Mbps
- FPS: 24-30
- Formato: WebM (primário) + MP4 (fallback)

### Mobile (4:5)
- Resolução: 720x900 ou 540x675
- Bitrate: 500-800 Kbps
- FPS: 24
- Formato: WebM (primário) + MP4 (fallback)

## Tamanhos Esperados

- Desktop WebM: ~3-5 MB para 10s
- Desktop MP4: ~5-8 MB para 10s
- Mobile WebM: ~1-2 MB para 10s
- Mobile MP4: ~2-3 MB para 10s

## Implementação Alternativa (Imagem em Mobile)

Se o vídeo mobile ainda ficar pesado, considere usar imagem:

```tsx
{mounted && (
  <>
    {isMobile ? (
      <Image
        src="/background-mobile.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
        quality={85}
      />
    ) : (
      <video autoPlay loop muted playsInline preload="metadata" poster="/background-poster.jpg">
        <source src="/background-video.webm" type="video/webm"/>
        <source src="/background-video.mp4" type="video/mp4"/>
      </video>
    )}
  </>
)}
```
