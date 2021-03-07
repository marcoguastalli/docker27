### build
cd apache2/src/v5
docker build -t apache2ssl8005:v5 .

### run
docker run -d --rm --name apache2ssl8005 -p 8005:80 -p 8443:443 apache2ssl8005:v5
docker run -d --rm --name apache2ssl8005 -p 8005:80 apache2ssl8005:v5

### access the container as root
docker container ls --all
docker exec -u root -t -i CONTANER-ID /bin/bash
tail -n 500 -f /var/log/apache2/error.log
tail -n 500 -f /var/log/apache2/access.log

### play
https://localhost:8443/index.html
http://localhost:8005/login.html

http://localhost:8005/enter
http://localhost:8005/welcome/
http://localhost:8005/trecentouno/301
http://localhost:8005/trecentodue/302
http://localhost:8005/trecentotre