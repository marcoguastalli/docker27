### build
cd nginx/src/v1
docker-compose up -d

### run
docker-compose up -d

### access the image as root
docker run -it nginx:1.19.6 /bin/bash

### access the container as root
docker container ls --all
docker exec -u root -t -i CONTANER-ID /bin/bash
tail -n 500 -f /var/log/nginx/error.log
tail -n 500 -f /var/log/nginx/access.log

### play
http://marco27.net/
http://marco27.net/index.html
