const db = require("../config")

module.exports = {
    media,
    findBy,
    findById,
    insert,
    update,
    remove,
}

function media() {
    return db ('media')
    .select('name')
}

function findBy() {
    return db('media_post')
    .where(filter)
    .select('id', 'url')
}

function findById(id) {
    return db('media_post')
    .where({ id })
    .first()
}

function insert(mediaPost) {
    const [ id ] = db ('media')
    .insert(mediaPost)
    return findById(id)
}

function update(id, changes) {
    db('media')
    .where({ id })
    .update(changes)
    return findById(id)
}

function remove(id) {
    return db('media')
    .where({ id })
    .del()
}