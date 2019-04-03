const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./auth/authRoutes');
const usersRoutes = require('./users/usersRoutes');

const server = express();

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/auth', authRoutes);
server.use('/api/users', usersRoutes);


server.get('/', (req, res) => {
    res.status(200).json({message: "up and running"})
})

module.exports = server;