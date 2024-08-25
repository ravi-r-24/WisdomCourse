import { Schema } from "mongoose";
import mongoose from "mongoose";

const bookSchema = new Schema(
  {
    cover: { type: String },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    index: [{ type: String }],
    type: { type: String, enum: ["eBook", "paperback"], required: true },
    original_price: { type: Number, required: true },
    actual_price: { type: Number, required: true },
    free_delivery: { type: Boolean, required: true, default: true },
    marketing_tag: {
      type: String,
      enum: ["Best Seller", "Recommended", "Must Read"],
    },
    language: { type: String, enum: ["English", "Hindi"], require: true },
    print_length: { type: Number },
    quantity: { type: Number },
  },
  { timestamp: true }
);

export const Book = mongoose.model("Book", bookSchema);
