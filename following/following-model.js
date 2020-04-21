const db = require("../config")

module.exports = {
    findBy,
    findById,
    insert,
    update,
    remove,
}

function findBy() {
    return db('following')
    .where(filter)
    .select('name')
}

function findById() {
    return db('following')
    .where({ id })
    .first()
}

function insert(user) {
    const [id] = db('following')
    .insert(user)
    return findById(id)
}

function update(id, changes) {
    db('following')
    .where({ id })
    .update(changes)
    return findById(id)
}

function remove(id) {
    return db('following')
    .where({ id })
    .del()
}