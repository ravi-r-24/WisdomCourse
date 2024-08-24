import { Router } from "express";
import { register, books, book } from "../controller/book.js";
import { upload } from "../middleware/multer.js";

export const router = Router();

// book end-points
router.route("/register").post(
  upload.fields([
    {
      name: "cover",
      maxCount: 1,
    },
  ]),
  register
);
router.route("/get_books").get(books);
router.route("/get_book/:id").get(book);
