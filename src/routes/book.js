import { Router } from "express";
import { register, fetchAllBooks, fetchBookById } from "../controller/book.js";
import upload from "../middleware/multer.js";

const router = new Router();

// routes
router.route("/register").post(
  upload.fields([
    {
      name: "cover_photo",
      maxCount: 1,
    },
  ]),
  register
);
router.route("/books").get(fetchAllBooks);
router.route("/book/:id").get(fetchBookById);

export default router;
