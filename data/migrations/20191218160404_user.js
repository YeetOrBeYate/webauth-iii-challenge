
exports.up = function(knex) {
  return knex.schema.createTable('user', tbl=>{
      tbl.increments();

      tbl.string('name', 128)
      .notNullable()
      .unique();

      tbl.string('department', 100)
      .notNullable();
      
      tbl.string('password', 128)
       .notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user');
};
