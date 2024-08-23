import { app } from "./app.js";
import { databaseConnection } from "./database/connection.js";
import dotenv from "dotenv";

// configure dotenv
dotenv.config({
  path: "../.env",
});

const port = process.env.PORT || 8080;

// database connection
databaseConnection()
  .then(
    app.listen(port, () => console.log(`Server is running at port: ${port}`))
  )
  .catch((error) =>
    console.log(`Failed to create server due to ${error.message}`)
  );
