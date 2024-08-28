import express from "express";
import bookRouter from "./routes/book.js";

export const app = express();

// book routes
app.use("/api/v1/book", bookRouter);
