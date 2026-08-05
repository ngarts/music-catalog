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
- Nginx

### Shared

- TypeScript Workspace
- Shared DTOs

### DevOps

- Docker
- Docker Compose
- Kubernetes (coming next)

---

## Goals

- Build a production-style REST API
- Develop a modern React frontend
- Share contracts between backend and frontend
- Apply Domain-Driven Design principles
- Design a cloud-native architecture
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
- Docker-ready configuration

### Frontend

- Responsive React application
- Material UI components
- Interactive flip cards
- Streaming service shortcuts
- Reverse proxy through Nginx

### Shared

- Shared DTO workspace
- Type-safe contracts between frontend and backend

---

## Architecture

```text
                 Browser
                    │
                    ▼
             Nginx (Frontend)
                    │
                 /api
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
│   ├── src/
│   └── nginx.conf
│
packages/
└── shared/
    └── src/

docs/
kubernetes/
```

---

## Running the Project

### Development

Start MongoDB

```bash
docker compose -f docker-compose.dev.yml up -d
```

Seed the database

```bash
npm run seed --workspace=@music-catalog/catalog-api
```

Start the backend

```bash
npm run dev --workspace=@music-catalog/catalog-api
```

Start the frontend

```bash
npm run dev --workspace=@music-catalog/frontend
```

---

### Production-like Environment

Build and start the complete stack

```bash
docker compose up --build -d
```

Open the application

```text
http://localhost:8080
```

Stop the stack

```bash
docker compose down
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
- Docker multi-stage builds
- Docker Compose orchestration
- Reverse proxy with Nginx
- Health checks

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

- [x] Docker images
- [x] Multi-container Docker Compose
- [x] Reverse proxy
- [x] Health checks
- [ ] Kubernetes deployment
- [ ] ConfigMaps
- [ ] Secrets
- [ ] Ingress
- [ ] CI/CD

---

## License

This project is developed for educational purposes as part of a software engineering learning journey.