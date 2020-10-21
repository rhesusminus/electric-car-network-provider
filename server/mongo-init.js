databases = ['users', 'stations']

databases.forEach((db, index) => {
  db = db.getSiblingDB(databases[index])

  db.createUser({ user: 'admin', pwd: 'secret', roles: ['readWrite'] })
})
