import mongoose from "mongoose";

const CountdownSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.models.Countdown ||
  mongoose.model("Countdown", CountdownSchema);
