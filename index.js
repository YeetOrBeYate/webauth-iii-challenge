const express = require('express');
require('dotenv').config()
const app = express();
const AuthRouter = require('./Auth/auth-router.js');
const UserRouter = require("./Users/User-router.js");
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use("/auth", AuthRouter);
app.use('/users', UserRouter )


const port = 8080;

app.listen(port, ()=>{console.log("listening on port 8080")})