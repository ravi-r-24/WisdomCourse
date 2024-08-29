import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    cover_photo: { type: String, required: true },
    eBook: {
      type: Boolean,
      default: false,
    },
    paperback: {
      type: Boolean,
      default: false,
    },
    language: { type: String, enum: ["Hindi", "English"], required: true },
    description: { type: String, required: true },
    index: [{ type: String }],
    marketing_tag: {
      type: String,
      enum: ["Best Seller", "Recommended", "Must Read"],
    },
    related_tags: [{ type: String }],
    free_delivery: { type: Boolean, default: true },
    print_length: { type: Number },
    original_price: { type: Number, default: 0, required: true },
    suggested_price: { type: Number, default: 0, required: true },
  },
  { timestamp: true }
);

export const Book = mongoose.model("Book", bookSchema);
