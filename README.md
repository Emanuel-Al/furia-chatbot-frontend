# 🐾 FURIA Chatbot

Um chatbot interativo desenvolvido para fãs da organização **FURIA Esports**, que fornece informações atualizadas sobre suas modalidades, jogadores e desempenho nos campeonatos. Com uma interface simples e intuitiva, o usuário pode se cadastrar, realizar login e interagir diretamente com o bot para ficar por dentro de tudo que acontece com o time.

## 🚀 Funcionalidades

- ✅ Autenticação de usuários (Login e Cadastro)
- ✅ Chatbot que responde perguntas sobre a FURIA Esports
- ✅ Base de conhecimento própria com foco em CS:GO e League of Legends
- ✅ Interface moderna e responsiva

## 🛠️ Tecnologias Utilizadas

### Frontend

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router Dom](https://reactrouter.com/)
- [React Hook Form + Zod](https://react-hook-form.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

---

## 🗃️ Base de Conhecimento

O chatbot foi treinado com uma base textual construída manualmente, reunindo informações das seguintes fontes:

- [Leaguepedia](https://lol.fandom.com/wiki/League_of_Legends_Esports_Wiki)
- [Liquipedia](https://liquipedia.net/)
- Sites oficiais da FURIA e torneios

Ela inclui dados sobre:

- História da organização
- Modalidades: CS2, League of Legends, Valorant, Rainbow Six
- Jogadores e line-ups
- Títulos e participações em campeonatos
- Momentos atuais nos torneios vigentes (como o 2º Split do CBLOL e ESL Pro League)

## 📦 Como Rodar o Projeto

### Pré-requisitos

- Node.js e npm
- MongoDB

### Instalação

1. Clone ambos os repositórios (front e back):
   Front: https://github.com/Emanuel-Al/furia-chatbot-frontend.git
   Back: https://github.com/Emanuel-Al/chatbot-furia-backend
2. Instale as dependências do frontend:

   ```bash
   cd frontend
   npm install
   ```

3. Instale as dependências do backend:

   ```bash
   cd ../backend
   npm install
   ```

4. Configure o MongoDB e as variáveis de ambiente (`.env`):

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/furia-chat
   JWT_SECRET=sua_chave_secreta
   ```

5. Inicie o backend:

   ```bash
   npm run dev
   ```

6. Em outro terminal, inicie o frontend:
   ```bash
   cd ../frontend
   npm run dev
   ```

---

## 📈 Melhorias Futuras

- Integração com APIs oficiais (Riot Games, HLTV, etc)
- Web scraping automatizado para atualizar a base de conhecimento
- Área de notícias ao vivo sobre partidas
- Implementação de IA via RAG + LangChain para respostas mais dinâmicas

---

## 👤 Autor

Desenvolvido por [Emanuel Reino](https://github.com/Emanuel-Al) - Ciência da Computação UFAPE  
Contato: emanuelreino13@gmail.com
