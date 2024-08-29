import express from "express";
import bookRouter from "./routes/book.js";
import seriesRouter from "./routes/series.js";

export const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// middleware to allow receiving json data file
app.use(
  express.json({
    limit: "10000",
  })
);
// middleware to receive public file data
app.use(express.static("./uploads"));
// book routes
app.use("/api/v1/book", bookRouter);
// series routes
app.use("/api/v1/series", seriesRouter);
