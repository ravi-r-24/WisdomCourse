import Router from "express";
import { register } from "../controller/series.js";
import upload from "../middleware/multer.js";

const router = new Router();

// routes
router.route("/register").post(upload.fields([]), register);

export default router;
