# mcp-demo

A small, dependency-free Node.js HTTP API starter project using only Node's built-in modules.

## Requirements

- Node.js 18 or later

## Run

```sh
npm start
```

The server listens on port `3000` by default. Set `PORT` to use another port.

## Endpoints

- `GET /` — returns a welcome message.
- `GET /health` — returns the service health status.
- Other paths return a JSON 404 response.

## Test

```sh
npm test
```

Tests use Node's built-in test runner and require no extra dependencies.
