const express = require('express')
const SERVER_PORT = 3000
const usersCtrl = require('./usersCtrl')

const app = express()

app.use(express.json())

app.get('/api/user', usersCtrl.getUsers)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))