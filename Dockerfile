FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache python3 make g++ git

# Copy package files
COPY package*.json ./

# Install deps as root (works with volume mounts)
RUN npm install

COPY . .

EXPOSE 3039

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
CMD ["npm", "run", "dev"]
