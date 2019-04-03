const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        console.log('here')
        res.status(200).json({ message: "auth routes connected"})
        
    } catch (error) {
        res.status(500).json({ message: error})
        
    }
})

module.exports = router;


