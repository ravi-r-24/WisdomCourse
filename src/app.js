import express from "express";
import { router as BookRouter } from "./routes/book.js";

export const app = express();

// middleware to send json data as response
app.use(
  express.json({
    limit: 10000,
  })
);

// book router
app.use("/api/v1/book", BookRouter);
