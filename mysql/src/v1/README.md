### build
cd mysql/src/v1
docker build -t mysql:v1 .

### run
docker run -d --name mysql mysql:v1
### run with volume
docker run -d \
--name mysql \
-v discoD:/discoD \
mysql:v1

### access the container
docker run -it mysql:v1 /bin/bash