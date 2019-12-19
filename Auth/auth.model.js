const knex = require("../data/db.js");


const addUser=(person)=>{
    return knex('user')
        .insert(person, "id")
        
}

const Login = (user)=>{
    return knex
    .select("name", "password", "id")
    .from('user')
    .where({name:user.name})
    .first()
}


module.exports={
    addUser,
    Login
}