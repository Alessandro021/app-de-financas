# App de Finanças

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/Alessandro021/app-de-financas)](https://github.com/Alessandro021/app-de-financas/issues)
![GitHub repo size](https://img.shields.io/github/repo-size/alessandro021/app-de-financas)
![GitHub contributors](https://img.shields.io/github/contributors/alessandro021/app-de-financas)
![GitHub forks](https://img.shields.io/github/forks/Alessandro021/app-de-financas?style=social)
![GitHub stars](https://img.shields.io/github/stars/alessandro021/app-de-financas?style=social)

<p align="justify">
O App de Finanças é um aplicativo desenvolvido com o objetivo de ajudar o usuário a controlar suas finanças pessoais. Com ele, é possível adicionar despesas e receitas, além de excluir registros antigos e pesquisar por dados específicos por data.
</p>

<p align="justify">
O aplicativo foi desenvolvido utilizando as ferramentas React Native, Expo e Firebase, garantindo uma experiência de usuário agradável e uma alta segurança nos dados armazenados. O React Native foi escolhido como plataforma de desenvolvimento por permitir a criação de aplicativos multiplataforma, compatíveis com iOS e Android, e oferecer uma ampla variedade de recursos e bibliotecas. O Expo, por sua vez, foi utilizado para agilizar o processo de desenvolvimento, permitindo a visualização em tempo real das mudanças realizadas no código.
</p>

<p align="justify">
Já o Firebase foi utilizado como banco de dados, armazenando as informações de despesas e receitas do usuário de forma segura e escalável. Além disso, o Firebase Authentication foi utilizado para permitir que os usuários façam login e se cadastrem no aplicativo, garantindo uma gestão de usuários fácil e segura.
</p>

## Funcionalidades

- Adicionar despesas e receitas
- Excluir despesas e receitas
- Procurar despesas e receitas por data
- Cadastro de usuário
- Login de usuário

## Tecnologias Utilizadas
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Firebase](https://firebase.google.com/)

## Como rodar o projeto

1. Clone este repositório
2. Instale as dependências com `npm install` ou `yarn`
3. Crie uma conta no [Firebase](https://firebase.google.com/) e crie um projeto.
4. No Firebase, crie um banco de dados Realtime Database e altere as regras de segurança.
5. Configure as variáveis de ambiente no arquivo `.env` com as suas credenciais do Firebase:
```.env
API_KEY=xxx
AUTH_DOMAIN=xxx
DATABASE_URL=xxx
PROJECT_ID=xxx
STORAGE_BUCKET=xxx
MESSAGING_SENDER_ID=xxx
APP_ID=xxx

```
6. Inicie o projeto com `expo start`, `npm start` ou `npx expo start`

## Screenshots

<p align="left">
  <img src="https://live.staticflickr.com/65535/52840490414_79b3a4db96_k.jpg" alt="Cronômetro" width="300">
  <img src="https://live.staticflickr.com/65535/52840290446_d42f137889_k.jpg" alt="Cronômetro" width="300">
  <img src="https://live.staticflickr.com/65535/52840290461_0d203a4541_k.jpg" alt="Cronômetro" width="300">
</p>

## Como Contribuir
1. Faça um fork deste repositório
2. Crie uma branch para sua feature (`git checkout -b feature/sua-feature`)
3. Faça commit de suas alterações (`git commit -am 'Add some feature'`)
4. Faça push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

## Licença
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
