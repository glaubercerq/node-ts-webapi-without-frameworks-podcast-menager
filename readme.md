# Podcast Manager API

A modern TypeScript Node.js REST API for podcast management without external frameworks.

## Features

- **List all podcast episodes**: Get a complete list of available podcast episodes
- **Filter episodes by podcast name**: Search for specific episodes by podcast name
- **Health check endpoint**: Monitor API status
- **CORS enabled**: Cross-origin resource sharing support
- **Type-safe**: Built with TypeScript for better development experience
- **Graceful shutdown**: Proper handling of termination signals
- **Error handling**: Comprehensive error management

## API Endpoints

### List All Episodes
- **GET** `/api/episodes`
- Returns all available podcast episodes

### Filter Episodes
- **GET** `/api/episodes/filter?p={podcastName}`
- Returns episodes filtered by podcast name

### Health Check
- **GET** `/api/health`
- Returns API status and timestamp

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd podcast-manager-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Access the API**
   - Base URL: `http://localhost:3333`
   - Health check: `http://localhost:3333/api/health`

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run typecheck` - Type checking without compilation

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Build Tool**: tsup
- **Development**: tsx

## Project Structure

```
src/
├── controllers/     # Request handlers
├── models/          # TypeScript interfaces
├── repositories/    # Data access layer
├── routes/          # Route definitions
├── services/        # Business logic
├── utils/           # Utility functions and constants
├── app.ts           # Application setup
└── server.ts        # Server entry point
```

## Example Response

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

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
