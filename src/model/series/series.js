import { Schema } from "mongoose";
import mongoose from "mongoose";

const seriesSchema = new Schema(
  {
    title: { type: String, required: true },
    related_tags: [{ type: String, required: true }],
    category: [{ type: Schema.Types.ObjectId, ref: "SeriesCategory" }],
  },
  { timestamp: true }
);

export const Series = mongoose.model("Series", seriesSchema);
