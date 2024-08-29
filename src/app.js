import express from "express";
import bookRouter from "./routes/book.js";
import seriesRouter from "./routes/series.js";

export const app = express();

// middleware to receive data from url
app.use(
  express.urlencoded({
    extended: true,
    limit: "10000",
  })
);

// middleware to receive public file data
app.use(express.static("./uploads"));

// book routes
app.use("/api/v1/book", bookRouter);
// series routes
app.use("api/v1/series", seriesRouter);
