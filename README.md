# WisdomCourse

# npm init

# npm i express dotenv

# .gitignore

# src

    -> app.js
    -> index.js

# script [package.json] -> "type": "module"

# npm i nodemon

# src

    -> routes
        -> books.js

# npm i mongoose

# src

    -> model
        -> book.js
    -> controller
        -> book.js
    -> utils
        -> apiError.js
        -> apiResponse.js

# configure dotenv

# src

    -> database
        -> connection.js
    -> constant.js

# WISDOMCOURSE

    -> .env

# src

    -> controller
        -> book.js [books, book]

// Steps:

1. create express server
2. connect to database
3. create modal
4. create routes
5. create controller
6. use routes [app.js]
7. use routes [router file]
8. use controller

// Work of book controller
a. Get all the data from the form/json
b. validate the data
-> Check if all the required fields are present
-> Check if the user send the cover image file
-> Upload the cover image on the cloudinary server
-> Get the cover image cloudinary url and assign it to the thumbnail url
c. Save the data to the database
d. send the response to the user [statusCode, data {data saved in the database}, "Success message"]
