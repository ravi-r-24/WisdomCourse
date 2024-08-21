import { Router } from "express";

const router = new Router();

// routes [different end-points]
router.route("/books").get((req, res) => {
  res.status(200).json({
    message: `This is get all books from the database end-points`,
  });
});

export default router;
