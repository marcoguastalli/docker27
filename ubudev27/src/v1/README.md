# ubudev27
here some links inspired me to write the Dockerfile

### buildpack-deps
https://hub.docker.com/_/buildpack-deps/
### gitpod
https://github.com/gitpod-io/gitpod
### scratch
https://hub.docker.com/_/scratch

### build
cd ubudev27/src/v1
docker build -t ubudev27:v1 .

### run
docker run -d --name ubudev27 ubudev27:v1

### access the container
docker run -it ubudev27:v1 /bin/bash