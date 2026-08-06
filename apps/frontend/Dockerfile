FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/frontend/package.json ./apps/frontend/
COPY packages/shared/package.json ./packages/shared/

RUN npm ci

COPY apps/frontend ./apps/frontend
COPY packages/shared ./packages/shared

ARG VITE_CATALOG_API_URL=/api
ENV VITE_CATALOG_API_URL=${VITE_CATALOG_API_URL}

RUN echo "VITE_CATALOG_API_URL=${VITE_CATALOG_API_URL}" \
 && printenv | grep '^VITE_'

FROM nginx:1.27-alpine AS runtime

COPY apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder \
  /app/apps/frontend/dist \
  /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]