#!/bin/bash

docker build -f apps/catalog-api/Dockerfile \
  -t music-catalog-api:local .

docker build -f apps/frontend/Dockerfile \
  --build-arg VITE_CATALOG_API_URL=/api \
  -t music-catalog-frontend:local .

minikube image load music-catalog-api:local
minikube image load music-catalog-frontend:local

kubectl rollout restart deployment/catalog-api
kubectl rollout restart deployment/frontend