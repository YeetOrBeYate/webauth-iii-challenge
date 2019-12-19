const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    const token = req.headers.auth;
    const key = process.env.TOKEN_SECRET;

    jwt.verify(token, key, (err, yeet)=>{
        
        if(err){
            res.status(401).json({message: "stop botting out"})
        }else{
            req.token = yeet;
            next();
        }
    })
}