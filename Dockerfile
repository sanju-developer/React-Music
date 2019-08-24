# base image
FROM node:8.14.0

# create working directory
RUN mkdir -p /var/www/html/docker/music/src/app

# set working directory
WORKDIR /var/www/html/docker/music/src/app

# copy package json from current directory
COPY package.json /var/www/html/docker/music/src/app

# run npm install to  install dependency
RUN npm install 
RUN npm install react-scripts@3.0.1 -g 

ADD src /var/www/html/docker/music/src/app/src
ADD public /var/www/html/docker/music/src/app/public

# run npm build to create build
RUN npm react-scripts build

CMD [ "npm", "start" ]