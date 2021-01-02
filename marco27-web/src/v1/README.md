### build
cd marco27-web/src/v1
docker-compose up -d

### run
docker-compose start
docker-compose stop

## play
http://marco27.net/
http://marco27.net/index.html
http://marco27.net/index.php
http://marco27.net:8080/basewar/

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
mongo -u local -p qwerty --authenticationDatabase admin
mongo -u local --authenticationDatabase admin
show dbs
use local
show collections
db.dieta.find()

##### Solr + Zookeeper
http://marco27.net:8983/solr/#/