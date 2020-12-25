### build
cd python/src/v2/
docker build -t python:v2 .

### run
docker run -d --name python python:v2
### run with volume
docker run -d \
--name python \
-v discoD:/discoD \
python:v2

### access the container
docker run -it python:v2 /bin/bash