# Rpi-Host and Container 
# 2 separate computer.
# Container gets BUILD when 
# docker-compose is run

FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
#RUN  npm install --package-lock-only
RUN  npm install
COPY ./ ./
CMD ["npm", "start"]
#CMD ["npm", "run", "start"]
