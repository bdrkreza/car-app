import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const CarModelSchema = new mongoose.Schema({
  maker_name: { type: String, required: "maker name can't be empty." },
  model_name: { type: String, required: "model name can't be empty." },
  body_name: { type: String, required: "body name can't be empty." },
  body_image: { type: String, default: "image-url" },
  no_of_seat: { type: String, required: "seat number can't be empty." },

  transmission_type: {
    type: String,
    required: "transmission type can't be empty.",
  },
  condition: {
    type: String,
    required: "car condition can't be empty.",
    default: "new",
  },
  package_type: [String],
  chassis_number: { type: String, required: "chassis number can't be empty." },
  engines_number: [],
  car_fuel_type: { type: String, required: true },
  drive: { type: String },
  mileage: { type: String },
  exterior_color: { type: String },
  interior_color: { type: String },
  car_year: { type: String, required: "car years can't be empty." },
  fixed_price: { type: String },
  registration_year: { type: String },
  car_features: [],

  asking_price: { type: Number },
  selling_price: { type: Number },

  car_description: { type: String },
  video_link: { type: String },
  images: [],
});

const CarAutoModel =
  mongoose.models.Cars || mongoose.model("Cars", CarModelSchema);

export default CarAutoModel;
