#v3
nodejs with webpack

### build
cd nodejs/src/v3
docker build -t nodejs:v3 .

### run
docker run -d --rm --name nodejs -p 9000:9000 nodejs:v3

### access the container as root
docker container ls --all
docker exec -u root -t -i CONTANER-ID /bin/bash

### play
enter in the container and get the /var/nodejs/dist/script.js
