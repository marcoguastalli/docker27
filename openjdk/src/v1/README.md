# openjdk
here some links inspired me to write the Dockerfile

### adoptopenjdk
https://hub.docker.com/_/adoptopenjdk
https://github.com/AdoptOpenJDK/openjdk-docker
https://github.com/AdoptOpenJDK/openjdk-docker/blob/master/11/jdk/ubuntu/Dockerfile.hotspot.releases.full

### build
cd openjdk/src/v1
docker build -t openjdk:v1 .

### run
docker run -d --name openjdk openjdk:v1

### access the container
docker run -it openjdk:v1 /bin/bash