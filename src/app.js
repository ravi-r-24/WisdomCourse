import express from "express";
import BookRouter from "./routes/book.js";
import seriesRouter from "./routes/series.js";

export const app = express();

// middleware to send json data as response
app.use(
  express.json({
    limit: 10000,
  })
);

// middleware to receive public file data
app.use(express.static("public"));

// book router
app.use("/api/v1/book", BookRouter);
// video-series router
app.use("/api/v1/series", seriesRouter);
