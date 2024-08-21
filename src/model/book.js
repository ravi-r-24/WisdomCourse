import { Schema } from "mongoose";

// book schema
const bookSchema = new Schema(
  {
    thumbnail: {
      url: { type: String, required: true },
    },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    eBook: {
      stock: { type: Boolean },
      price: {
        original: { type: Number },
        actual: { type: Number },
      },
    },
    paperback: {
      stock: { type: Number },
      price: {
        original: { type: Number },
        actual: { type: Number },
      },
      print_length: { type: Number },
    },
    language: { type: String, enum: ["English", "Hindi"] },
    description: { type: String },
    index: [{ type: String }],
    related_keys: [{ type: String }],
  },
  { timestamp: true }
);

// book model
export const Book = mongoose.model("Book", bookSchema);
