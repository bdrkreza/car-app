import mongoose from "mongoose";

const CarModelSchema = new mongoose.Schema({
  cn: {
    type: String,
    required: "chassis number can't be empty.",
  },
  maker: { type: String, required: "maker name can't be empty." },
  model: { type: String, required: "model name can't be empty." },
  body: [{ type: String, required: "body name can't be empty." }],
  transmission: [{ type: String, required: true }],
  seat: [{ type: Number, required: true }],
  grade: [{ type: String, required: true }],
  engine: [{ type: Number, required: true }],
  fuel: [{ type: String, required: true }],
  drive: [{ type: String, required: true }],
  year: [{ type: String, required: "car years can't be empty." }],
});

const CarUploadModel =
  mongoose.models.Cars || mongoose.model("Cars", CarModelSchema);

export default CarUploadModel;
