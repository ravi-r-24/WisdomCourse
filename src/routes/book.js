import { Router } from "express";
import registerBook from "../controller/book.js";

const router = new Router();

// routes [different end-points]
router.route("/books").post(registerBook);

export default router;
