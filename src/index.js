import dotenv from "dotenv";
import { app } from "./app.js";
import { databaseConnection } from "./db/connection.js";

// configure dotenv
dotenv.config({
  path: "../.env",
});

// connect to MongoDB
databaseConnection()
  .then(
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log(`Mongo database connection failed: ${error}`);
  });
