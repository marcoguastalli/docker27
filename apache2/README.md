# apache2
docker image apache2

### build
cd apache2/src
docker build -t apache2:v1 .

### run
docker run -d --name apache2 -P apache2
docker run -d --name apache2 -p 8088:80 apache2