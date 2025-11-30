# Build stage
FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginxinc/nginx-unprivileged:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Nginx unprivileged listens on 8080 by default
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
