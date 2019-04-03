const express = require('express');
const bcrypt = require('bcryptjs');
const Auth = require('../models/models')


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

module.exports = router;


