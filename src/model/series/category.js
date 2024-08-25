import { Schema } from "mongoose";
import mongoose from "mongoose";

const seriesCategorySchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    thumbnail: { type: String },
    language: { type: String, enum: ["English", "Hindi"], required: true },
    description: {
      title: { type: String },
      content: { type: String },
    },
    series: [{ type: Schema.Types.ObjectId, ref: "SeriesContent" }],
  },
  { timestamp: true }
);

export const SeriesCategory = mongoose.model(
  "SeriesCategory",
  seriesCategorySchema
);
