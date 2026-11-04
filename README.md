# mcp-demo

A small, dependency-free Node.js HTTP API starter project using only Node's built-in modules.

## Requirements

- Node.js 18 or later
- Docker (optional, for running the container)

## Run with Node.js

```sh
npm start
```

The server listens on port `3000` by default. Set `PORT` to use another port.

## Run with Docker

Build the image from the repository root:

```sh
docker build -t mcp-demo .
```

Start the container and publish port 3000:

```sh
docker run --rm -p 3000:3000 mcp-demo
```

The API will be available at `http://localhost:3000`.

## Endpoints

- `GET /` — returns a welcome message.
- `GET /health` — returns the service health status.
- Other paths return a JSON 404 response.

## Test

```sh
npm test
```

Tests use Node's built-in test runner and require no extra dependencies.
