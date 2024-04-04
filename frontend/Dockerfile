# Consider Two separate machines
# 1: container-machine (virtual)
# 2: host-machine (physical), Rpi

# Container gets BUILD when 
# docker-compose is run

# 'npm install'.. installs all 
# dependant apps mentioned in 
# 'package.json' file

FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
#RUN  npm install --package-lock-only
RUN  npm install
COPY ./ ./
CMD ["npm", "run", "start"]
