import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const CarModelSchema = new mongoose.Schema({
  model_name: {
    model_name: { type: String },
    release_year: { type: Number },
    serial: { type: Number },
  },
  car_body_type: {
    id: { type: Number },
    body_name: { type: String, required: true },
    body_image: { type: String, default: "image-url" },
    body_image_url: { type: String, default: "image-url" },
    serial: { type: Number },
    no_of_seat: { type: String },
    transmission_type: { type: String, required: true },
  },
  package_type: [String],
  chassi_number_prefix: [
    {
      no: { type: String, required: true },
      engines: [],
    },
  ],
  car_fuel: {
    fuel_type: { type: String, required: true },
    fuel_tank_capacity: { type: Number },
  },
  drive: { type: String },
  car_year: { type: String },
  fixed_price: { type: String },
  registration_year: { type: String },

  images: {
    image_id: { type: Number },
    image_url: { type: String, default: "image-url" },
  },
});

const CarAutoModel =
  mongoose.models.Cars || mongoose.model("Cars", CarModelSchema);

export default CarAutoModel;