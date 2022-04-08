import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const CarModelSchema = new mongoose.Schema({
  maker_name: {
    model_name: { type: String, required: "maker name can't be empty." },
    release_year: { type: Number },
    serial: { type: String },
  },
  car_body_type: {
    id: { type: Number },
    body_name: { type: String, required: "body name can't be empty." },
    body_image: { type: String, default: "image-url" },
    body_image_url: { type: String, default: "image-url" },
    serial: { type: Number },
    no_of_seat: { type: String },
    transmission_type: { type: String, required: "transmission type can't be empty." },
  },
  condition: {
    type: String,
    required: "car condition can't be empty.",
    default: "new",
  },
  package_type: [String],
  chassis_number: { type: String, required: "chassis number can't be empty." },
  engines_number: [],
  car_fuel: {
    fuel_type: { type: String, required: true },
    fuel_tank_capacity: { type: Number },
  },
  drive: { type: String },
  car_year: { type: String ,required:"car years can't be empty." },
  fixed_price: { type: String },
  registration_year: { type: String },

  images: [
    {
      image_id: { type: String },
      image_url: { type: String, default: "image-url" },
    },
  ],
});

const CarAutoModel =
  mongoose.models.Cars || mongoose.model("Cars", CarModelSchema);

export default CarAutoModel;
