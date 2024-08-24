import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// method to upload files on the cloudinary
export const uploadOnCloudinary = async (localFilePath, remoteFilePath) => {
  try {
    if (!localFilePath) return null; // If localFilePath is not availabe then return null

    // Upload the file on the cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // File has been uploaded successfully
    console.log(
      `File has been uploaded successfully on cloudinary ${response.url}`
    );

    // return the response
    return response;
  } catch {
    fs.unlink(localFilePath);
  }
};
