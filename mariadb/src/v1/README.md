### build
cd mariadb/src/v1
docker-compose up -d

### run
docker-compose start
docker-compose stop

## play
http://marco27.net/
http://marco27.net/index.html
http://marco27.net/index.php

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