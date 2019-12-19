const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./auth.model.js');
const router = express.Router();

const jwt = require('jsonwebtoken');


router.post('/register', (req,res)=>{
    const body = req.body;

    bcrypt.hash(body.password, 8, (err, hash)=>{
        body.password = hash;
        db.addUser(body)
        .then((user)=>{
            res.status(200).json({user})
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json({err})
        })
    })
    
})

router.post('/login', (req,res)=>{
    const body = req.body;

    db.Login(body)
    .then((user)=>{
        if( user && bcrypt.compareSync(body.password,user.password)){
            const token = signToken(user)

            res.status(200).json({
                token,
                message: `welcome ${user.name}`})
        }else{
            res.status(500).json({message:"invalid credentials"})
        }
    })
})

function signToken(user){

    const payload={
        name: user.id
    }

    const key = process.env.TOKEN_SECRET;

    const options={
        expiresIn: '1h'
    }


    return jwt.sign(payload, key, options)
}

module.exports = router;