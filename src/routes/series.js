import { Router } from "express";

const router = new Router();

// routes
router.route("/register").post((req, res) => {
  res.status(201).json({
    message: "Series created successfully",
  });
});

export default router;
