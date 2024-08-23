import express from "express";

export const app = express();

// middleware to send json data as response
app.use(
  express.json({
    limit: 10000,
  })
);
