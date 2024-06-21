import mongoose from "mongoose";

const HabitSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  completedDates: { type: [Date], default: [] },
});

export default mongoose.models.Habit || mongoose.model("Habit", HabitSchema);
