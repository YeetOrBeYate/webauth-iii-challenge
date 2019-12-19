const express = require('express');
const db = require("./user-model.js")
const rest = require("./restricted.js");
const router = express.Router();

router.get("/", rest, (req,res)=>{
    
    const id = req.token.name;

    db.getUsers(id)
    .then(users=>{
        res.status(200).json({users})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({err})
    })
})

module.exports = router;