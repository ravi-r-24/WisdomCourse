import { APIError } from "../utils/apiError.js";
import { APIResponse } from "../utils/apiResponse.js";
import { Book } from "../model/book.js";
import isEmpty from "lodash/isEmpty.js";

export const register = async (req, res) => {
  // STEPS:
  // 1. Get all the data from the user/form-data
  // 2. validate the data
  // 3. create an object to store and create the new entry in the database
  // 4. save the new entry in the database
  // 5. send the response to the user

  // 1. Get all the data from the user/form-data
  const {
    title,
    subtitle,
    description,
    type,
    free_delivery,
    original_price,
    actual_price,
    language,
    related_tags,
    cover,
  } = req.body;

  // 2. validate the data
  // a. trim all strings
  if (
    [
      "title",
      "subtitle",
      "description",
      "language",
      "related_tags",
      "original_price",
      "actual_price",
      "type",
      "free_delivery",
      "cover",
    ].some((field) => field.trim() === "")
  ) {
    throw new APIError(409, "All * marked fields are mandatory");
  }

  // 3. Create an object to make an entry to the database
  const newBook = await Book.create({
    title,
    subtitle,
    description,
    language,
    related_tags,
    original_price,
    actual_price,
    type,
    free_delivery,
  });

  console.log(`New Book Data: ${newBook}`);
  newBook.save();

  // 5. Send response after saving the data to the database
  res
    .status(201)
    .json(new APIResponse(201, newBook, "Book registered successfully"));
};

export const books = async (req, res) => {
  // Find all the books in the collection
  // Send the response

  const books = await Book.find({});
  res
    .status(200)
    .json(new APIResponse(200, books, "This is all the books in the database"));
};

export const book = async (req, res) => {
  // Get the id of book from the url
  // Search the book from the database, matching the id in the url
  // send the response

  // 1. Get the id from the url
  const id = req.params.id;
  // 2. Search for the book in the database with the id
  const book = await Book.findById(id);

  // 3. If book is not found then send an error message
  if (isEmpty(book)) {
    throw new APIError(404, `Book with id ${id} not found`);
  }

  // 3. Send the response with the book data
  res
    .status(200)
    .json(new APIResponse(200, book, `Response for book with id ${id}`));
};
