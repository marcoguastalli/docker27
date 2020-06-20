### build and run
Use the Intellij Docker plugin or

### build
cd apache2/src/v4
docker build -t apache2:v4 .

### run
docker run -d --name apache2 -p 8004:80 -p 443:443 apache2:v4

### play from the host
curl --head https://localhost:8004
curl -X GET http://localhost:8004

### access the container
docker run -it apache2:v4 /bin/bash
docker run -it apache4:latest /bin/bash
  apt-get update && apt-get -y install sudo
  apt-get install curl
  apt-get install ufw
  sudo ufw enable

### access the container as root: docker exec -u root -t -i container_id /bin/bash
docker container ls --all
docker exec -u root -t -i CONTANER-ID /bin/bash
docker exec -u root -t -i 8bbf00a1a579 /bin/bash

### endpoints
http://localhost:8004/index.html
https://localhost:8004/index.html