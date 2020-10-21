mongo -- "stations" <<EOF
  db.createUser({
    user:  "$MONGO_USERNAME",
    pwd: "$MONGO_PASSWORD",
    roles: [{ role: "readWrite", db: "stations" }]
  })
EOF
