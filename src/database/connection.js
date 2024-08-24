import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://ravir19777:d8cfEZUKVwuDAmf5@cluster0.tpbga.mongodb.net/WisdomCourse"
    );

    console.log(`Connection host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`Error while connection to the database: ${error.message}`);
    process.exit(1);
  }
};
