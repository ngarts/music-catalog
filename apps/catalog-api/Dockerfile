FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/catalog-api/package.json ./apps/catalog-api/
COPY packages/shared/package.json ./packages/shared/

RUN npm ci

COPY apps/catalog-api ./apps/catalog-api
COPY packages/shared ./packages/shared

RUN npm run build --workspace=@music-catalog/shared \
 && npm run build --workspace=@music-catalog/catalog-api


FROM node:22-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./
COPY apps/catalog-api/package.json ./apps/catalog-api/
COPY packages/shared/package.json ./packages/shared/

RUN npm ci --omit=dev

COPY --from=builder /app/apps/catalog-api/dist ./apps/catalog-api/dist
COPY --from=builder /app/packages/shared/dist ./packages/shared/dist

USER node

EXPOSE 3000

CMD ["node", "apps/catalog-api/dist/server.js"]