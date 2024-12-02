import Router from 'express'
import { getPosts, createPost, putPost, deletePost } from '../src/controllers/posts.controllers.js'

const router = Router()

router.get('/posts', getPosts)
router.post('/posts', createPost)
router.put('/posts/like/:id', putPost)
router.delete('/posts/:id', deletePost)

export default router