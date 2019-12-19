const knex = require("../data/db.js");

const getUsers=()=>{
    return knex 
    .select("name", "department")
    .from("user")
}

module.exports ={
    getUsers
}