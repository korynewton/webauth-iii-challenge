const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('database').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('database').where(filter);
}

async function add(user) {
  const [id] = await db('database').insert(user);

  return findById(id);
}

function findById(id) {
  return db('database')
    .where({ id })
    .first();
}
