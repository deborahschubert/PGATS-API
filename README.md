# API de Transferências

Esta API permite realizar operações de registro, login, consulta de usuários e transferências de valores entre usuários. O objetivo é servir como base para estudos de testes e automação de APIs.

## Tecnologias Utilizadas
- Node.js
- Express
- Swagger (documentação)

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente local.
2. Instale as dependências:
   ```powershell
   npm install express swagger-ui-express
   ```

## Estrutura de Diretórios
```
controller/    # Lógica das rotas
service/       # Regras de negócio
model/         # Dados em memória
app.js         # Configuração das rotas e middlewares
server.js      # Inicialização do servidor
swagger.json   # Documentação da API
```

## Como Executar

1. Para iniciar o servidor:
   ```powershell
   node server.js
   ```
2. Acesse a documentação Swagger em [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints

- `POST /register` - Registro de novo usuário
- `POST /login` - Login de usuário
- `GET /users` - Consulta de usuários
- `POST /transfer` - Realiza transferência
- `GET /transfers` - Consulta transferências
- `GET /api-docs` - Documentação Swagger

## Regras de Negócio
- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências para destinatários não favorecidos só podem ser feitas se o valor for menor que R$ 5.000,00.

## Testes
Para testes automatizados, importe o `app.js` em seu framework de testes (ex: Supertest) sem executar o método `listen()`.

---

API desenvolvida para fins educacionais.