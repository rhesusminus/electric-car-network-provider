mongo -- "$MONGO_INITDB_DATABASE" <<EOF
  db.createUser({
    user:  "$MONGO_USERNAME",
    pwd: "$MONGO_PASSWORD",
    roles: [{ role: "readWrite", db: "users" }]
  })

  db.createUser({
    user:  "$MONGO_USERNAME",
    pwd: "$MONGO_PASSWORD",
    roles: [{ role: "readWrite", db: "stations" }]
  })
EOF
