import express from "express";
import { createComment, createPost, editPost, getPosts, likePost } from "../controllers/fireStoreRoutes.js";

const router = express.Router();
router.post('/addPost', createPost);
router.get('/getPosts', getPosts);
router.post('/addComment', createComment);
router.post('/likePost', likePost);
router.post('/editPost', editPost);

export default router;