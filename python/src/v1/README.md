### build
cd python/src/v1/
docker build -t python:v1 .

### run
docker run -d --name python python:v1

### access the container
docker run -it python:v1 /bin/bash