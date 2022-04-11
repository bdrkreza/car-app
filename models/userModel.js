import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
  image: [],
  name: {
    type: String,
    required: "Email can't be empty.",
    // unique: true
  },
  email: {
    type: String,
    required: "Email can't be empty.",
    // unique: true
  },
  // password: {
  //   type: String,
  //   required: "Password name can't be empty.",
  // },
});
const UserModel = mongoose.models.Users || mongoose.model("Users", userSchema);

export default UserModel;
