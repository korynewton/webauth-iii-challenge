
exports.up = function(knex) {
  return knex.schema.createTable('database', tbl => {
      tbl.increments()

      tbl.string('username', 128).notNullable().unique()
      tbl.string('password', 128).notNullable()
      tbl.string('department', 128).notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('database');
};
