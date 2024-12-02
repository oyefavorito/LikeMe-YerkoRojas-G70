import dbase from '../server/database/db.js'

export const findAllPosts = () => dbase('SELECT * FROM posts ORDER BY id')

export const insertarPost = (titulo, img, descripcion, likes = 0) => dbase('INSERT INTO posts (titulo, img, descripcion, likes) values ($1, $2, $3, $4) RETURNING *', [titulo, img, descripcion, likes])

export const updatePost = (id) => dbase('UPDATE posts SET likes = (likes + 1) WHERE id = $1 RETURNING *', [id])

export const borrarPost = (id) => dbase('DELETE FROM posts WHERE id = $1', [id])