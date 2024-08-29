import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}${process.env.DB_NAME}`
    );

    console.log(`Connecting host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to database: ${error.message}`);
  }
};
