### build
cd python/src/v1/
docker build -t python:v1 .

### run
docker run -d --name python -P python:v1