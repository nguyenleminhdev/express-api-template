FROM node:lts-alpine
RUN npm install -g pm2
RUN pm2 install pm2-logrotate
RUN mkdir -p /server
WORKDIR /server
COPY package.json /server/
RUN npm install
COPY . /server
EXPOSE 1337
CMD ["pm2", "start", "pm2.json", "--no-daemon"]
