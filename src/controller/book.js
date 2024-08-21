import APIError from "../utils/apiError.js";
import APIResponse from "../utils/apiResponse.js";

const registerBook = async (req, res) => {
  // get the data from the user/form
  // validate the data as per description
  // create a new book object with validated data
  // save the book object into the database
  // return a success response with the book object

  // 1. get the data from the user/form
  const {
    title,
    description,
    eBook,
    paperback,
    language,
    index,
    related_keys,
    subtitle,
    thumbnail,
  } = req.body;

  // 2. validate the data as per description
  if (
    [thumbnail, title, subtitle, language, description].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new APIError(409, "All * marked fields are mandatory");
  }

  // 5. send the response with success message
  // TODO: send the created object as data not the req.body
  res
    .status(201)
    .json(new APIResponse(201, req.body, "Book created successfully"));
};

export default registerBook;
