const db = require("../config")

module.exports = {
    posts,
    findBy,
    findById,
    insert,
    update,
    remove,
}

function posts() {
    return db ('posts')
    .select('name')
}

function findBy() {
    return db('posts')
    .where(filter)
    .select('name')
}

function findById() {
    return db('posts')
    .where({ id })
    .first()
}

function insert(post) {
    const [ id ] = db ('posts')
    .insert(post)
    return findById(id)
}

function update(id, changes) {
    db('posts')
    .where({ id })
    .update(changes)
    return findById(id)
}

function remove(id) {
    return db('posts')
    .where({ id })
    .del()
}