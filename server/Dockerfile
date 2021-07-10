# Install lts alpine linux distro and nodejs
FROM node:lts-alpine

# Install pm2 and pm2 reference
RUN npm install -g pm2
RUN pm2 install pm2-logrotate

# Init source code location
RUN mkdir -p /server
WORKDIR /server
COPY package.json /server/

# Bundle source code
RUN npm install
COPY . /server

# Open port
EXPOSE 1337

# Start application
CMD ["pm2", "start", "pm2.json", "--no-daemon"]