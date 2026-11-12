# Lightweight multi-stage Dockerfile for chromacam.art promo website
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy website static assets
COPY . /usr/share/nginx/html/

# Expose HTTP port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --spider -q http://localhost:80 || exit 1

CMD ["nginx", "-g", "daemon off;"]
