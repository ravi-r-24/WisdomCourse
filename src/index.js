import { app } from "./app.js";

// listen the request on the server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
