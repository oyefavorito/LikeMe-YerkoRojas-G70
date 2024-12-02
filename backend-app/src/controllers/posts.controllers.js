import { findAllPosts, insertarPost, updatePost, borrarPost } from '../models/posts.dao.js'

export const getPosts = (req, res) => findAllPosts()
  .then((allPosts) => res.status(200).json({ status: true, code: 200, data: allPosts }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const createPost = (req, res) => {
  const { titulo, url, descripcion, likes } = req.body
  insertarPost(titulo, url, descripcion, likes)
    .then((result) => res.status(201).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}

export const putPost = (req, res) => {
  const { id } = req.params
  updatePost(id)
    .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}

export const deletePost = (req, res) => {
  const { id } = req.params
  borrarPost(id)
    .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}

export const notFound = (req, res) => {
  res.status(404).json({ status: false, code: 500, message: 'No se ha encontrado la página' })
}