# 📌 Feedback API 

API RESTful desenvolvida com **Node.js**, **Express.js** e **MongoDB** para registrar feedbacks diários de squads, permitindo que os membros forneçam atualizações sobre seu progresso, bloqueios encontrados e a necessidade de ajuda. A API foi projetada para facilitar o acompanhamento do desenvolvimento e aprendizado dentro das equipes, fornecendo uma maneira rápida e eficiente de coletar e consultar feedbacks.

##  Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **MongoDB (Atlas ou Local)**
- **Mongoose**
- **Dotenv**
- **Cors**
---
## 📂 Estrutura do Projeto
```
feedback-api/
│
├── config/
│   ├── database.js       # Configuração do MongoDB
│
├── controllers/
│   ├── feedbackController.js  # Lógica para manipular os dados do feedback (CRUD)
│
├── middlewares/
│   ├── validateFeedback.js  # Validação dos dados da requisição
│
├── models/
│   ├── Feedback.js      # Definição do modelo Feedback para o Mongoose
│
├── services/
│   ├── feedbackService.js    # Lógica de negócios para o feedback
│
├── routes/
│   ├── feedbackRoutes.js   # Definição das rotas de feedback
│
├── .env                 # Variáveis de ambiente
├── .gitignore           # Arquivos e pastas ignorados pelo Git
├── package.json         # Dependências e configurações do projeto
├── server.js            # Arquivo principal que inicia o servidor e importa as configurações
```
---


## 🛠 Configuração e Instalação
### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/Xcode-Compass/feedback-api
cd feedback-api
```

### 2️⃣ Instalar Dependências
```bash
npm install
```


### 3️⃣ Configurar Variáveis de Ambiente
Criar um arquivo **.env** na raiz do projeto e adicionar as seguintes variáveis:
```
# Development Environment (dev)
MONGO_URI_DEV=mongodb://localhost:27017/db_name

# Production Environment (prod)
MONGO_URI_PROD=mongodb+srv://root:<YOUR_PASSWORD>@cluster0.91rtu.mongodb.net/<DB_NAME>?retryWrites=true&w=majority

# Set server port
PORT=3000

# NODE_ENV: Define o ambiente (dev ou prod)
NODE_ENV=development
```
Substituir `<YOUR_PASSWORD>` pela senha do usuário e `DBNAME` pelo nome do banco.


### 4️⃣ Iniciar o Servidor

O servidor pode ser iniciado de diferentes maneiras, dependendo do ambiente e da preferência:

```bash
npm run dev
```

Ou executar diretamente:

```bash
node server.js
```

### Descrição dos Comandos:

- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento, com a variável de ambiente `NODE_ENV` definida como `development`. Utiliza a opção `--watch`, que reinicia automaticamente o servidor sempre que há mudanças no código.

- **`npm run prod`**: Similar ao comando de desenvolvimento, mas com a variável de ambiente `NODE_ENV` definida como `production`, preparando o servidor para execução em produção.

- **`node server.js`**: Inicia o servidor conforme o valor da variável `NODE_ENV` configurada nas variáveis de ambiente do sistema. O comportamento do servidor dependerá dessa variável, podendo ser definida como `development` ou `production`.

### Observação:

Antes de iniciar o servidor, garantir que as dependências estejam instaladas previamente, executando `npm install` ou `yarn install`.

---

## 📌 Endpoints da API
> Todos os endpoints têm o prefixo `/api/v1/`

### 🔹 Listar todos os Feedbacks
**GET** `/api/v1/feedbacks`

Este endpoint retorna todos os feedbacks cadastrados.

**Exemplo de resposta**:
```json
{
  "message": "Feedbacks encontrados com sucesso",
  "data": {
    "feedbacks": [
      {
        "_id": "67dee243af5beaffba8f5d2b",
        "squad": "Squad1",
        "name": "João Silva",
        "studyContent": "Aprendendo Node.js",
        "blockers": "Nenhum",
        "needHelp": "Não",
        "generalFeed": "Dia produtivo!",
        "__v": 0
      },
      {
        "_id": "67deee70769b5c8d4fd7a886",
        "squad": "Squad1",
        "name": "Marcos Felipe",
        "studyContent": "Aprendendo Node.js",
        "blockers": "Nenhum",
        "needHelp": "Sim, preciso de ajuda com Promises",
        "generalFeed": "Dia produtivo, mas tive algumas dificuldades com callbacks.",
        "__v": 0
      },
      {
        "_id": "67df01d91f0bd6dc7077d514",
        "squad": "Squad5",
        "name": "Milena Rodrigues",
        "studyContent": "Estudando API RESTful",
        "blockers": "Nenhum",
        "needHelp": "Não",
        "generalFeed": "Curso com uma excelente didática!",
        "__v": 0
      }
    ]
  }
}
```

### 🔹 Buscar um Feedback por ID
**GET** `/api/v1/feedbacks/{id}`

Este endpoint retorna os detalhes de um feedback específico, identificado pelo ID informado na URL.

**Exemplo de resposta**:
```json
{
  "message": "Feedback encontrado com sucesso",
  "data": {
    "_id": "67dee243af5beaffba8f5d2b",
      "squad": "Squad1",
      "name": "João Silva",
      "studyContent": "Aprendendo Node.js",
      "blockers": "Nenhum",
      "needHelp": "Não",
      "generalFeed": "Dia produtivo!",
      "__v": 0
  }
}
```

### 🔹 Criar um Feedback
**POST** `/api/v1/feedbacks`

Este endpoint permite criar um novo feedback.

**Campos obrigatórios**:
- `squad`: O nome do time.
- `name`: Nome da pessoa fornecendo o feedback.
- `studyContent`: Conteúdo de estudo relacionado ao feedback.

**Campos opcionais**:
- `blockers`: Descrição dos bloqueios encontrados.
- `needHelp`: Se há necessidade de ajuda.
- `generalFeed`: Comentários gerais sobre o dia ou atividade.

**Exemplo de corpo da requisição**:
```json
{
  "squad": "Squad1",
  "name": "João Silva",
  "studyContent": "Aprendendo Node.js",
  "blockers": "Nenhum",
  "needHelp": "Não",
  "generalFeed": "Dia produtivo!"
}
```

**Resposta esperada (sucesso)**:
```json
{
  "message": "Feedback criado com sucesso",
  "data": {
    "_id": "67dee243af5beaffba8f5d2b",
    "squad": "Squad1",
    "name": "João Silva",
    "studyContent": "Aprendendo Node.js",
    "blockers": "Nenhum",
    "needHelp": "Não",
    "generalFeed": "Dia produtivo!",
    "__v": 0
  }
}
```
### 🔹 Atualizar um Feedback
**PUT** `/api/v1/feedbacks/{id}`

Este endpoint permite atualizar um feedback existente, identificado pelo ID na URL.

**Exemplo de corpo da requisição**:
```json
{
  "squad": "Squad1",
  "name": "João Silva",
  "studyContent": "Estudando MongoDB",
  "blockers": "Dificuldade com agregações",
  "needHelp": "Sim, preciso de ajuda com agregações",
  "generalFeed": "Foi um dia desafiador, mas produtivo."
}
```

**Resposta esperada (sucesso)**:
```json
{
  "message": "Feedback atualizado com sucesso",
  "data": {
    "_id": "67dee243af5beaffba8f5d2b",
    "squad": "Squad1",
    "name": "João Silva",
    "studyContent": "Estudando MongoDB",
    "blockers": "Dificuldade com agregações",
    "needHelp": "Sim, preciso de ajuda com agregações",
    "generalFeed": "Foi um dia desafiador, mas produtivo.",
    "__v": 0
  }
}
```

### 🔹 Deletar um Feedback
**DELETE** `/api/v1/feedbacks/{id}`

Este endpoint permite excluir um feedback existente, identificado pelo ID na URL.

**Exemplo de resposta**:
```json
{
  "message": "Feedback deletado com sucesso"
}
```

---

## 📜 Licença
Este projeto está licenciado sob a **MIT License**. Contribuições são bem-vindas! 

