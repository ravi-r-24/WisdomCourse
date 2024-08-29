import APIError from "../utils/apiError.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import { Book } from "../model/book.js";
import APIResponse from "../utils/apiResponse.js";

export const register = async (req, res) => {
  // get the data from the form/user
  /*
    validate the data
        -> check if all the mandatory fields are present
        -> check if all the string have no spaces before it's starting and after it's ending
    */
  // upload the book cover photo to cloudinary and get it's cloudinary url
  // create an object instance of the data object
  // save the data to store in the database
  // send response to the user with saved data

  const {
    title,
    subtitle,
    index,
    eBook,
    paperback,
    language,
    print_length,
    description,
    related_tags,
    marketing_tag,
    free_delivery,
    original_price,
    suggested_price,
  } = req.body;

  console.log(
    `title: ${title}, subtitle: ${subtitle}, description: ${description}`
  );

  // validate data
  if (
    [title, subtitle, language, description].some((field, index) =>
      // trim the field and check if it is empty
      console.log(`Index: ${index} ${field.trim() === ""}`)
    )
  ) {
    throw new apiError(409, `All * marked fields are mandatory`);
  }

  // upload the book cover image to the cloudinary
  const cover_image = await uploadOnCloudinary(req.files?.cover_photo[0]?.path);

  // create an object instance of the data object
  const newBook = await Book.create({
    title,
    subtitle,
    cover_photo: cover_image?.url,
    eBook,
    paperback,
    language,
    print_length,
    description,
    related_tags,
    marketing_tag,
    free_delivery,
    original_price,
    suggested_price,
    index,
  });

  console.log(`New Book: ${newBook}`);

  newBook.save();

  res
    .status(201)
    .json(new apiResponse(201, "Book", "Book creation successful"));
};

export const fetchAllBooks = async (req, res) => {
  try {
    // get all the books from the database
    // send response to the user with the books

    // get all the books from the database
    const books = await Book.find({});

    // send the response to the user
    res
      .status(200)
      .json(new APIResponse(200, books, "All books successfully fetched"));
  } catch (error) {
    throw new APIError(500, "Error while fetching books", error);
  }
};

export const fetchBookById = async (req, res) => {
  // get book id from the url
  // get the book from the database based on the id
  // send response to the user with the book

  try {
    // get the url from the url
    const bookId = req.params.id;
    console.log(`Book id: ${bookId}`);

    // get the book from the database
    const book = await Book.findById(bookId);

    // send the response to the user
    res
      .status(200)
      .json(
        new APIResponse(
          200,
          book,
          `Book with id: ${bookId} successfully fetched`
        )
      );
  } catch (error) {
    throw new APIError(500, "Error while fetching book", error);
  }
};

// TODO: update book code will be written at last
