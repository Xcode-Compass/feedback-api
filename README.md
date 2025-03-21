# 📌 Feedback API

API RESTful desenvolvida com **Node.js, Express.js e MongoDB** para registrar feedbacks diários de squads.

## 🚀 Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **MongoDB (Atlas ou Local)**
- **Mongoose**
- **Dotenv**
- **Cors**

## 📂 Estrutura do Projeto
```
feedback-api/
│-- config/
│   ├── database.js   # Configuração do MongoDB
│-- models/
│   ├── Feedback.js   # Modelo do Feedback
│-- routes/
│   ├── feedbackRoutes.js # Rotas do CRUD
│-- .env              # Variáveis de ambiente
│-- .gitignore        # Arquivos ignorados pelo Git
│-- package.json      # Dependências do projeto
│-- server.js         # Servidor principal
```

## 🛠 Configuração e Instalação
### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/feedback-api.git
cd feedback-api
```

### 2️⃣ Instalar Dependências
```bash
npm install
```

### 3️⃣ Configurar Variáveis de Ambiente
Crie um arquivo **.env** na raiz do projeto e adicione:
```
MONGO_URI=mongodb+srv://root:<db_password>@cluster0.mongodb.net/meuBanco?retryWrites=true&w=majority&appName=Cluster0
PORT=3000
```
Substitua `<db_password>` pela senha do seu usuário e `meuBanco` pelo nome do banco.

### 4️⃣ Rodar o Servidor
```bash
npm run dev
```
ou
```bash
node server.js
```

## 📌 Endpoints da API
### 🔹 Criar um Feedback
**POST** `/feedbacks`
```json
{
  "squad": "Squad1",
  "name": "João",
  "studyContent": "Aprendendo Node.js",
  "blockers": "Nenhum",
  "needHelp": "Não",
  "generalFeed": "Dia produtivo!"
}
```

### 🔹 Listar todos os Feedbacks
**GET** `/feedbacks`

### 🔹 Buscar um Feedback por ID
**GET** `/feedbacks/{id}`

### 🔹 Atualizar um Feedback
**PUT** `/feedbacks/{id}`

### 🔹 Deletar um Feedback
**DELETE** `/feedbacks/{id}`

## 📜 Licença
Este projeto está licenciado sob a **MIT License**. Sinta-se à vontade para contribuir! 🚀

