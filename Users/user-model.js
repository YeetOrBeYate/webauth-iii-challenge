const knex = require("../data/db.js");

const getUsers=(id)=>{

const sub = knex.select("department").from('user').where("id", id)

    return knex 
    .select("name", "department")
    .from("user")
    .where("department", sub )
}

module.exports ={
    getUsers
}