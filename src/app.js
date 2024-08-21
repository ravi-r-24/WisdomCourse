import express from "express";
import bookRouter from "./routes/book.js";

export const app = express();

// middleware to handle the json request
app.use(
  express.json({
    limit: 10000,
  })
);

// routes for the book
app.use("/api/v1/book", bookRouter);
