# Podcast Manager API

Uma moderna API REST em TypeScript Node.js para gerenciamento de podcasts sem o uso de frameworks externos.

## Features

- **List all podcast episodes**: Obtém uma lista completa de todos os episódios de podcast disponíveis.
- **Filter episodes by podcast name**: Busca episódios específicos pelo nome do podcast.
- **Health check endpoint**: Monitora o status da API.
- **CORS enabled**: Suporte a compartilhamento de recursos entre origens diferentes.
- **Type-safe**: Construído com TypeScript para uma melhor experiência de desenvolvimento.
- **Graceful shutdown**: Tratamento adequado de sinais de término.
- **Error handling**: Gerenciamento abrangente de erros.
- 
## API Endpoints

### Listar Todos os Episódios
- **GET** `/api/episodes`
- Retorna todos os episódios de podcast disponíveis.

### Filtrar Episódios
- **GET** `/api/episodes/filter?p={podcastName}`
- Retorna episódios filtrados pelo nome do podcast.

### Health Check
- **GET** `/api/health`
- Retorna o status da API e o timestamp.

## Início Rápido (Quick Start)

1. **Clone o repositório**
   ```bash
   git clone <repository-url>
   cd podcast-manager-api
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o ambiente**
   ```bash
   cp .env.example .env
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

5. **Acesse a API**
   - Base URL: `http://localhost:3333`
   - Health check: `http://localhost:3333/api/health`

## Scripts

- `npm run dev` - Inicia o servidor de desenvolvimento com hot reload.
- `npm run build` - Realiza a build para produção.
- `npm start` - Inicia o servidor de produção.
- `npm run typecheck` - Verifica os tipos sem compilar.

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Build Tool**: tsup
- **Development**: tsx

## Project Structure

```
src/
├── controllers/     # Manipuladores de requisições (**Request handlers**)
├── models/          # Interfaces TypeScript
├── repositories/    # Camada de acesso a dados (**Data access layer**)
├── routes/          # Definições de rotas
├── services/        # Lógica de negócio (**Business logic**)
├── utils/           # Funções utilitárias e constantes
├── app.ts           # Configuração da aplicação (**Application setup**)
└── server.ts        # Ponto de entrada do servidor (**Server entry point**)
```

## Exemplo de Resposta

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "venus",
    "episode": "Xuxa",
    "videoId": "00000",
    "categories": ["humor"]
  }
]
```
- **[Tsx](https://github.com/egoist/tsx):** Compilador TypeScript que suporta a construção de projetos.
- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript que permite executar código JavaScript do lado do servidor.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Pacote de definições de tipos para Node.js para auxiliar no desenvolvimento com TypeScript.

## Como Utilizar

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor executando `start:dev`.
4. Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de recebimento (pull requests) para melhorar este projeto.


