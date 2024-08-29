import mongoose from "mongoose";
import { Schema } from "mongoose";

const seriesSchema = new Schema(
  {
    title: { type: String, required: true },
    related_tags: [{ type: String }],
    language: { type: String, enum: ["English", "Hindi"] },
    collections: [{ type: Schema.Types.ObjectId, ref: "SeriesCollection" }],
  },
  { timestamp: true }
);

export const Series = mongoose.model("Series", seriesSchema);
