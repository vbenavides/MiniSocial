const db = {
  user: [
    {
      id: 1,
      name: 'Vicente',
    },
  ],
};

function list(tabla) {
  return db[tabla];
}

function get(tabla, id) {
  let col = list(tabla);
  return col.filter((item) => item.id === id)[0];
}

function upsert(tabla, data) {
  db[collection].push(data);
}

function remove(tabla, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
