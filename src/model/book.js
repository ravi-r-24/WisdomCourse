import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    cover_photo: { type: String, required: true },
    eBook: {
      name: { type: String },
      available: { type: Boolean, default: false },
      suggested_contribution: { type: Number },
      original_contribution: { type: Number },
    },
    paperback: {
      name: { type: String },
      suggested_contribution: { type: Number },
      original_contribution: { type: Number },
      no_of_copies: { type: Number, default: 0 },
    },
    language: { type: String, enum: ["Hindi", "English"] },
    print_length: { type: Number },
    description: { type: String },
    index: [{ type: String }],
    marketing_tag: { type: String, enum: ["Hindi", "English"] },
    related_tag: { type: String },
  },
  { timestamp: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
