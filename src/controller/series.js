import { Series } from "../model/series.js";
import APIError from "../utils/apiError.js";
import APIResponse from "../utils/apiResponse.js";

const register = async (req, res) => {
  // get the data from the form/user
  /*
    validate the data
        -> check if all the mandatory fields are present
        -> check if all the string have no spaces before it's starting and after it's ending
    */
  // create an object instance to hold the data
  // save the data to the database
  // send the response to the user

  try {
    // get the data from the user
    const { title, related_tags, language } = req.body;

    // validate the data
    if (!title) {
      throw new APIError(409, "Title required for each series");
    }

    // create an object instance to hold the data
    const newSeries = await Series.create({
      title,
      related_tags,
      language,
    });

    // save the data to the database
    newSeries.save();

    // send the response to the user
    res
      .status(201)
      .json(new APIResponse(201, newSeries, "New Series added successfully"));
  } catch (error) {
    throw new APIError(
      500,
      `Error while creating new series due to ${error.message}`
    );
  }
};

export { register };
