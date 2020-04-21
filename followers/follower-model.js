const db = require("../config")

module.exports = {
    findBy,
    findById,
    insert,
    update,
    remove,
}

function findBy() {
    return db('followers')
    .where(filter)
    .select('name')
}

function findById() {
    return db('followers')
    .where({ id })
    .first()
}

function insert(user) {
    const [id] = db('followers')
    .insert(user)
    return findById(id)
}

function update(id, changes) {
    db('followers')
    .where({ id })
    .update(changes)
    return findById(id)
}

function remove(id) {
    return db('followers')
    .where({ id })
    .del()
}