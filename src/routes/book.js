import { Router } from "express";
import { register } from "../controller/book.js";
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

export default router;
