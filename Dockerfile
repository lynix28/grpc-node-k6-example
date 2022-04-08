FROM node

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 50051

CMD ["npm", "start"]