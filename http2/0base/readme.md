#http2 from https://hub.docker.com/r/amusarra/apache-ssl-tls-mutual-authentication
cd http2/0base
docker pull amusarra/apache-ssl-tls-mutual-authentication:1.0.0
docker run -i -t -d -p 10443:10443 --name=apache-ssl-tls-mutual-authentication amusarra/apache-ssl-tls-mutual-authentication:1.0.0

#play
https://localhost:10443/