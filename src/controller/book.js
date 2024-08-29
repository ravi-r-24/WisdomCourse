import apiError from "../utils/apiError.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import { Book } from "../model/book.js";
import apiResponse from "../utils/apiResponse.js";

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
