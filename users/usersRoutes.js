const express = require('express');
const router = express.Router();

const secret = require('../secrets');
const Users = require('../models/models');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            jwt.verify(token, secret.jwtSecret)
            const users = await Users.find();
            res.status(200).json(users)
        } catch(error) {
            res.status(500).json(error)
        }
    } else {
        res.status(500).json({ message:"You shall not pass" })
    }
})

module.exports = router;