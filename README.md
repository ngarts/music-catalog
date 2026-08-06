# Music Catalog

Music Catalog is a production-style full-stack application built to explore modern backend development, frontend engineering, containerization, and cloud-native deployment.

The project showcases a music catalog through a React frontend and a Fastify REST API, sharing contracts through a dedicated TypeScript workspace package.

The application is fully containerized with Docker and deployed on Kubernetes using a production-inspired architecture.

---

# Tech Stack

## Backend

- TypeScript
- Node.js
- Fastify
- MongoDB

## Frontend

- React
- Material UI
- Vite

## Shared

- TypeScript Workspace
- Shared DTOs

## DevOps

- Docker
- Docker Compose
- Kubernetes
- Kustomize

---

# Goals

- Build a production-style REST API
- Develop a modern React frontend
- Share contracts between backend and frontend
- Apply clean architectural patterns
- Containerize the application
- Deploy the application on Kubernetes
- Separate build-time and runtime responsibilities
- Follow enterprise software engineering practices

---

# Current Features

## Backend

- Fastify REST API
- Dependency Injection
- Repository Pattern
- MongoDB persistence
- Database seed
- Environment-based configuration
- Health endpoint

## Frontend

- React application
- Material UI
- Interactive flip cards
- Streaming service shortcuts
- Environment-based configuration

## Shared

- Shared DTO workspace
- Type-safe contracts

---

# Architecture

```text
                     Browser
                        │
                        ▼
                   Kubernetes Ingress
                        │
          ┌─────────────┴─────────────┐
          ▼                           ▼
      Frontend Service          Catalog API Service
          │                           │
          ▼                           ▼
     React + Nginx               Fastify API
                                      │
                                      ▼
                                  MongoDB
                                      │
                                      ▼
                          Persistent Volume Claim
```

---

# Kubernetes Architecture

The application is deployed using the following Kubernetes resources:

- Namespace
- Deployments
- Services
- Ingress
- ConfigMaps
- Secrets (generated through Kustomize)
- Persistent Volume Claim
- Health Checks
- Database Seed Job

---

# Build vs Runtime

The project intentionally separates image creation from application orchestration.

## Build

- TypeScript compilation
- React production build
- Docker image creation

## Runtime

- Kubernetes orchestration
- Configuration through ConfigMaps and Secrets
- Persistent storage
- Service discovery
- Ingress routing

This separation follows the same architecture typically adopted in CI/CD pipelines.

---

# Repository Structure

```text
apps/
├── catalog-api/
├── frontend/

packages/
└── shared/

kubernetes/
├── catalog-api/
├── frontend/
├── mongodb/
└── kustomization.yaml

docs/
```

---

# Running with Docker Compose

```bash
docker compose up --build
```

---

# Running on Kubernetes

Build Docker images

```bash
docker build -f apps/catalog-api/Dockerfile \
  -t music-catalog-api:local .

docker build \
  -f apps/frontend/Dockerfile \
  --build-arg VITE_CATALOG_API_URL=/api \
  -t music-catalog-frontend:local .
```

Load images into Minikube

```bash
minikube image load music-catalog-api:local
minikube image load music-catalog-frontend:local
```

Deploy

```bash
kubectl apply -k kubernetes
```

Port Forward

```bash
kubectl port-forward service/frontend 8080:80
```

---

# Project Highlights

- Monorepo architecture
- Shared TypeScript workspace
- Repository Pattern
- Dependency Injection
- Docker multi-stage builds
- Docker Compose
- Kubernetes deployments
- Ingress-based routing
- Kustomize configuration
- Persistent storage
- Secure configuration management
- Production-style architecture

---

# Roadmap

## Application

- [x] Monorepo
- [x] Shared workspace
- [x] Fastify REST API
- [x] MongoDB integration
- [x] Repository Pattern
- [x] Dependency Injection
- [x] React frontend
- [x] Material UI
- [x] Shared DTOs
- [x] Streaming services integration

## Infrastructure

- [x] Docker
- [x] Docker Compose
- [x] Kubernetes
- [x] Namespace
- [x] ConfigMaps
- [x] Secrets
- [x] Persistent Volumes
- [x] Health Checks
- [x] Ingress
- [x] Database Seed Job

## Future Improvements

- CI/CD pipeline
- Helm Charts
- Horizontal Pod Autoscaler
- Network Policies
- TLS with cert-manager
- Observability (Prometheus & Grafana)

---

# License

A cloud-native full-stack application built to explore modern software engineering practices, backend architecture and Kubernetes deployment.