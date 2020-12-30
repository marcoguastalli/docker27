// db.getSiblingDB () is equivalent to use admin;
db.getSiblingDB('admin')
    .createUser({
        user: 'local',
        pwd: 'qwerty',
        roles: [
            {
              role: "readWrite",
              db: "local"
            }
        ]
});