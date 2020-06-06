### build
cd apache2/src/v3
docker build -t apache2:v3 .

### run
docker run -d --name apache2 -P apache2:v3
docker run -d --name apache2 -p 8088:80 apache2:v3

### play from the host
curl -I HEAD http://localhost:8088
curl -X GET http://localhost:8088

### access the container
docker run -it apache2:v3 /bin/bash

### endpoints
http://localhost:8088/index.html
http://localhost:8088/error.html