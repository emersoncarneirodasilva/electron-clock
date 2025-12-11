# Electron Clock ⏰

![Electron](https://img.shields.io/badge/Electron-v39.2.6-blue) ![License](https://img.shields.io/badge/License-MIT-green)

Um **relógio internacional desktop** criado com **Electron.js**, com estilo **cyberpunk** e suporte a **modos claro e escuro**. O app exibe horário, data e fuso horário de várias cidades do mundo, com interface moderna e interativa.

---

## 🎨 Funcionalidades

- Relógio em tempo real com **formato 12h/24h**
- Exibição da **data atual**
- Seleção de **fusos horários internacionais**  
  (América do Sul, América do Norte, Europa, Ásia, África, Oceania)
- **Modo claro e escuro** com cores harmoniosas e neon sutil
- **Interface cyberpunk**: título e relógio com fontes futuristas e efeitos neon discretos
- Botões interativos com hover effects
- Barra superior personalizada com botão de fechar nativo

---

## ⚡ Tecnologias usadas

- [Electron.js](https://www.electronjs.org/) – App desktop multiplataforma
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) e [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) – Estrutura e estilo
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) – Lógica do relógio
- [Google Fonts](https://fonts.google.com/) – Fonte **Orbitron** para estilo cyberpunk

---

## 💻 Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/USERNAME/electron-clock.git
```

2. Entre na pasta do projeto:

```bash
cd electron-clock
```

3. Instale as dependências:

```bash
npm install
```

4. Rode o app em modo desenvolvimento:

```bash
npm run dev
```

5. (Opcional) Empacote o app para Windows:

```bash
npm install -g electron-packager
electron-packager . electron-clock --platform=win32 --arch=x64 --out=dist
```

---

## 🖌️ Personalização

Troque o fundo e cores neon no styles.css para combinar com seu estilo preferido

Adapte fusos horários e cidades no index.html facilmente

---

## 📦 Estrutura do projeto

```bash
electron-clock/
│
├─ main.js        # Script principal do Electron
├─ index.html     # Interface do relógio
├─ script.js      # Lógica do relógio
├─ styles.css     # Estilos e temas
├─ package.json   # Configurações do projeto
└─ dist/          # Pasta gerada ao empacotar o app
```

---

## 👾 Telas do app

Insira prints do modo dark e light aqui para destacar o visual.

---

## ⚖️ Licença

MIT License – use livremente, compartilhe e modifique

---

## 🖼️ Imagens do App

<img width="400" height="500" alt="Captura de tela 2025-12-10 235357" src="https://github.com/user-attachments/assets/872c1195-d96c-458e-a55f-902a4cea51c3" />
<img width="400" height="500" alt="Captura de tela 2025-12-10 235420" src="https://github.com/user-attachments/assets/aeffa05d-d4e6-4a7b-9e73-b6cda0f70027" />

