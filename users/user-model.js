const db = require("../config")

module.exports = {
    findBy,
    findById,
    insert,
    update,
    remove,
}

function findBy() {
    return db('users')
    .where(filter)
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