### build
cd apache2/src/v5
docker build -t apache2_8005:v5 .

### run
docker run -d --name apache2_8005 -p 8005:80 apache2_8005:v5

### play from the host
curl --head http://localhost:8005
curl -X GET http://localhost:8005 (login is returned)

### endpoints
http://localhost:8005/index.html
http://localhost:8005/login.html

http://localhost:8005/welcome
http://localhost:8005/login
http://localhost:8005/l301
http://localhost:8005/pt301