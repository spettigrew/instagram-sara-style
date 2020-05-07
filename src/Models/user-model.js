const db = require("../config")

module.exports = {
    list,
    findBy,
    findById,
    insert,
    update,
    remove,
}

function list() {
    return db('list')
        .select()
}

function findBy() {
    return db('users')
    .where(filter)
    .select('name')
}

function findById() {
    return db('users')
    .where({ id })
    .first()
}

function insert(user) {
    const [ id ] = db ('users')
    .insert(user)
    return findById(id)
}

function update(id, changes) {
    db('users')
    .where({ id })
    .update(changes)
    return findById(id)
}

function remove(id) {
    return db('users')
    .where({ id })
    .del()
}