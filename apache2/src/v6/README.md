### build
cd apache2/src/v6
docker build -t apache2:v6 .

### run
docker run -d --rm --name apache2 -p 8006:443 apache2:v6

### access the container as root
docker container ls --all
docker exec -u root -t -i CONTANER-ID /bin/bash
tail -n 500 -f /var/log/apache2/error.log
tail -n 500 -f /var/log/apache2/access.log

### play
https://localhost:8006/index.html
https://localhost:8006/login.html
