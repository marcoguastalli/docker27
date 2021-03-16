### build
cd marco27-web/src/v1
docker-compose up -d
##### rebuild the marco27-web-nodejs image
docker-compose up -d --build

### run
docker-compose start
docker-compose stop
docker container restart marco27-web-nodejs

## play
http://marco27.net/
http://marco27.net/index.html
http://marco27.net/index.php
http://marco27.net:8080/marco27-web/v1/releasenotes

##### phpmyadmin
http://marco27.net:8000/
mariadb
root:pwd

##### SQL
SELECT F.ID,
       F.NAME,
       P.PATH
  FROM `mydb`.`PFS_FILE` AS F,
       `mydb`.`PFS_PATH` AS P
 WHERE F.ID = P.FILE_ID

##### MongoDB
docker container ls
docker exec -it CONTAINER-ID bash
mongo -u mongo-admin -p qwerty --authenticationDatabase admin
show dbs
use admin
db.createUser({user: "local", pwd: "qwerty", roles: [ { role: "readWrite", db: "local" } ]})
show users
exit
mongo -u local -p qwerty --authenticationDatabase admin
show dbs
use local
show collections
db.createCollection("dieta")
db.dieta.find()

##### mongo-express
FROM node:12-alpine3.11
WORKDIR /node_modules/mongo-express
http://marco27.net:8081/

##### Solr + Zookeeper
http://marco27.net:8983/solr/#/
curl 'http://marco27.net:8983/solr/admin/collections?action=CREATE&name=printFileSystem&numShards=1&collection.configName=_default'
