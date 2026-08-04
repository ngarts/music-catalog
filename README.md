# Music Catalog

Music Catalog is a learning project designed to build a production-style full-stack application using modern TypeScript technologies and enterprise architectural patterns.

The project is intentionally developed step by step following enterprise software engineering practices.



---

## Tech Stack

### Backend

- TypeScript
- Node.js
- Fastify
- MongoDB

### Frontend

- React
- Material UI

### Shared

- TypeScript Workspace
- Shared DTOs

### DevOps

- Docker
- Kubernetes (planned)

---

## Goals

- Build a RESTful API
- Develop a modern React frontend
- Share contracts between backend and frontend
- Containerize the application with Docker
- Deploy and orchestrate services with Kubernetes
- Apply software engineering best practices

---

## Current Features

- REST API with Fastify
- React frontend
- Material UI
- Repository Pattern
- Dependency Injection
- MongoDB persistence
- Shared DTO workspace
- Database seed
- Docker development environment

---

## Architecture

```text
Browser
 │
 ▼
React
 │
 ▼
Services
 │
 ▼
API Client
 │
HTTP
 ▼
Fastify
 │
 ▼
Controllers
 │
 ▼
Services
 │
 ▼
Repository Interface
 │
 ▼
MongoDB Repository
 │
 ▼
MongoDB
```

Shared contracts

```text
packages/shared
        ▲
        │
Backend ───── Frontend
```

---

## Repository Structure

```text
apps/
├── catalog-api/
│   └── src/
│
├── frontend/
│   └── src/
│
packages/
└── shared/
    └── src/

docs/
kubernetes/
```

---

## Running the project

### Start MongoDB

```bash
docker compose up -d
```

### Seed the database

```bash
npm run seed --workspace=@music-catalog/catalog-api
```

### Start the backend

```bash
npm run dev --workspace=@music-catalog/catalog-api
```

### Start the frontend

```bash
npm run dev --workspace=@music-catalog/frontend
```

---

## Roadmap

- [x] Monorepo
- [x] Shared workspace
- [x] Fastify API
- [x] Dependency Injection
- [x] Repository Pattern
- [x] MongoDB integration
- [x] Database seed
- [x] React frontend
- [x] Material UI
- [x] Frontend ↔ Backend integration
- [ ] Docker multi-container
- [ ] Kubernetes deployment
- [ ] Authentication
- [ ] CI/CD