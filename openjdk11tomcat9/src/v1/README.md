# openjdk11tomcat9
Open JDK 11 with Apache Tomcat 9

### build
cd openjdk11tomcat9/src/v1
docker build -t openjdk11tomcat9:v1 .

### run
docker run -d --name openjdk11tomcat9 -p 8080:8080 openjdk11tomcat9:v1

### access the container
docker run -it openjdk11tomcat9:v1 /bin/bash

### play from the host
http://localhost:8080