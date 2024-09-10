# BancoApp - Mobile React Native

Este projeto é uma aplicação móvel inspirada no **Banco do Brasil**, desenvolvida com **React Native** e **Expo Router**. O app simula o acesso a contas bancárias com diferentes perfis de usuários, oferecendo uma interface intuitiva e moderna.

## Funcionalidades

- Acesso à conta do usuário com uma tela de login personalizada.
- Navegação entre diferentes perfis, incluindo **Pessoa Física**, **BB Cash**, **Pessoa Jurídica**, **Private**, **Produtor Rural**, **Governo** e **Conta Internacional**.
- Design e navegação inspirados no Banco do Brasil.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo Router**: Gerenciamento de navegação e rotas.
- **React Native Safe Area Context**: Ajustes para diferentes tamanhos de tela e dispositivos.
- **React Native ImageBackground e Image**: Imagens e fundos personalizados.

## Estrutura do Projeto

```bash
.
├── assets/
│   ├── capa.jpg
│   ├── icon_Pfisica.png
│   ├── icon_pj.png
│   ├── international.png
│   ├── logo.png
│   ├── private.png
│   ├── robo.png
│   ├── rural.png
│   ├── screenshotTela1.png
│   ├── screenshotTela2.png
│   ├── screenshotTela3.png
│   ├── seta-esquerda.png
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── login.tsx
│   ├── perfil.tsx
├── .gitignore
├── app.json
├── babel.config.js
├── package-lock.json
├── package.json
└── tsconfig.json
