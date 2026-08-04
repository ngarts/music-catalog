# Music Catalog

Music Catalog is a production-style full-stack application built as a learning project to explore modern TypeScript technologies, enterprise architectural patterns, and cloud-native development.

The application showcases a music catalog through a React frontend and a Fastify REST API, sharing contracts through a dedicated workspace package.

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
- Kubernetes (coming next)

---

## Goals

- Build a production-style REST API
- Develop a modern React frontend
- Share contracts between backend and frontend
- Apply Domain-Driven Design principles
- Containerize the application with Docker
- Deploy the application with Kubernetes
- Follow enterprise software engineering practices

---

## Current Features

### Backend

- REST API with Fastify
- Dependency Injection
- Repository Pattern
- MongoDB persistence
- Database seed
- Environment-based configuration

### Frontend

- Responsive React application
- Material UI components
- Interactive flip cards
- Streaming service shortcuts

### Shared

- Shared DTO workspace
- Type-safe contracts between frontend and backend

---

## Architecture

```text
                Browser
                   │
                   ▼
               React UI
                   │
                   ▼
              Application
                Services
                   │
                   ▼
               API Client
                   │
              HTTP / JSON
                   │
                   ▼
                Fastify API
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

### Shared Contracts

```text
packages/shared
        ▲
        │
Backend ─────────── Frontend
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

## Running the Project

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

## Project Highlights

- Monorepo architecture
- Shared TypeScript workspace
- Clean separation between frontend and backend
- Repository Pattern
- Dependency Injection
- MongoDB persistence
- Interactive music catalog
- Streaming platform integration

---

## Roadmap

### Application

- [x] Monorepo
- [x] Shared workspace
- [x] Fastify REST API
- [x] MongoDB integration
- [x] Repository Pattern
- [x] Dependency Injection
- [x] Database seed
- [x] React frontend
- [x] Material UI
- [x] Frontend ↔ Backend integration
- [x] Interactive flip cards
- [x] Streaming services integration

### Infrastructure

- [ ] Docker images
- [ ] Multi-container Docker Compose
- [ ] Kubernetes deployment
- [ ] ConfigMaps
- [ ] Secrets
- [ ] Ingress
- [ ] CI/CD

---

## License

This project is developed for educational purposes as part of a software engineering learning journey.