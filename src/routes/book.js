import { Router } from "express";

const router = new Router();

// routes
router.route("/register", registerController);

export default router;
