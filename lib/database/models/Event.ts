import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
