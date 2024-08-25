import { Schema } from "mongoose";
import mongoose from "mongoose";

const seriesContentSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    original_price: { type: Number, required: true },
    actual_price: { type: Number, required: true },
    thumbnailURL: { type: String },
    videoURL: { type: String },
  },
  { timestamp: true }
);

export const SeriesContent = mongoose.model(
  "SeriesContent",
  seriesContentSchema
);
