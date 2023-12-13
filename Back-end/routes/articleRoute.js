import express from "express";
import {
  createArticle,
  deleteArticle,
  updateArticle,
  getArticles,
  getArticle
} from "../controllers/articleController.js";

const router = express.Router();
router.get("/", getArticles);
router.get("/:id", getArticle)
router.post("/", createArticle);
router.delete("/:id", deleteArticle);
router.put("/:id", updateArticle);

export default router;
