
const bcrypt = require('bcrypt');


exports.seed = function(knex) {
      return knex('user').insert([
        { name: 'Kyle', department:"IT", password: bcrypt.hashSync("Kyle", 8)},
        { name: 'Joe', department: "IT", password: bcrypt.hashSync("Joe", 8)},
        { name: 'Michael', department: "IT", password: bcrypt.hashSync("Michael", 8)},
        { name: 'Jenna', department: "Marketing", password: bcrypt.hashSync("Jenna", 8)},
        { name: 'Calta', department: "Analytics", password: bcrypt.hashSync("Calta", 8)}
      ]);

};
