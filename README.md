# Music Catalog

A cloud-native full-stack application for managing and showcasing a music catalog.

The project is intentionally developed step by step following enterprise software engineering practices.

---

## Tech Stack

### Backend

- TypeScript
- Node.js
- Fastify
- MongoDB

### Frontend

- React (planned)

### DevOps

- Docker
- Kubernetes (planned)

---

## Goals

- Build a RESTful API
- Develop a modern React frontend
- Containerize the application with Docker
- Deploy and orchestrate services with Kubernetes
- Apply software engineering best practices

---

## Current Features

- REST API with Fastify
- Repository Pattern
- Dependency Injection
- MongoDB persistence
- Database seed
- Docker development environment

---

## Architecture

```text
HTTP
 │
 ▼
Routes
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

---

## Repository Structure

```text
apps/
├── catalog-api/
│   ├── src/
│   │   ├── config/
│   │   ├── container/
│   │   ├── controllers/
│   │   ├── domain/
│   │   ├── infrastructure/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── seeds/
│   │   └── services/
│   └── package.json
│
└── frontend/      # React web application (planned)

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

### Start the API

```bash
npm run dev --workspace=@music-catalog/catalog-api
```

---

## Roadmap

- [x] Monorepo
- [x] Fastify API
- [x] Dependency Injection
- [x] Repository Pattern
- [x] MongoDB integration
- [x] Database seed
- [ ] React frontend
- [ ] Docker multi-container
- [ ] Kubernetes deployment
- [ ] Authentication
- [ ] CI/CD