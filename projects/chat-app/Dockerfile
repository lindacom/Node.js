FROM node:18-alpine
WORKDIR chatapp
COPY . .
RUN yarn install --production
CMD ["node" "server.js"]
EXPOSE 3000
