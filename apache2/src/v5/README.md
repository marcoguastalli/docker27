### build
cd apache2/src/v5
docker build -t apache2_8005:v5 .

### run
docker run -d --name apache2_8005 -p 8005:80 apache2_8005:v5

### play from the host
curl --head http://localhost:8005
curl -X GET http://localhost:8005 (login is returned)

### access the container as root: docker exec -u root -t -i container_id /bin/bash
docker container ls --all
docker exec -u root -t -i CONTANER-ID /bin/bash
docker exec -u root -t -i 8bbf00a1a579 /bin/bash
tail -n 500 -f /var/log/apache2/error.log
tail -n 500 -f /var/log/apache2/access.log

### endpoints
http://localhost:8005/index.html
http://localhost:8005/login.html

http://localhost:8005/enter
http://localhost:8005/welcome/
http://localhost:8005/trecentouno/301
http://localhost:8005/trecentodue/302
http://localhost:8005/trecentotre