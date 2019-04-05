const express = require('express');
const bcrypt = require('bcryptjs');
const Auth = require('../models/models')
const jwt = require('jsonwebtoken');
const secret = require('../secrets').jwtSecret



const router = express.Router();

router.post('/register', async (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;
    try {
        const register = await Auth.add(user)
        if (register) {
            res.status(200).json(register)
        } else {
            res.status(400).json({message:"user already added"})
        }
    } catch(error) {
        res.status(500).json(error)
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Auth.findBy({ username }).first();
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({ message:`welcome ${user.username}`, token })
        } else {
            res.status(400).json({ message: "incorrect user or pass" })
        }

    } catch(error) {
        res.status(500).json({ message:"you shall not pass", error })
    }
})

function generateToken(user) {
    const payload = {
      subject : user.id,
      username : user.username,
    }
    const options = {
      expiresIn: "1d"
    }  
    return jwt.sign(payload, secret, options);
  }

module.exports = router;


