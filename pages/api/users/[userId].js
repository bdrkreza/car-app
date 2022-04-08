import UserModel from "../../../models/userModel";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  const {
    query: { userId },
    method,
  } = req;

  await connectDB();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const user = await UserModel.find({
          $or: [{ name: { $regex: userId, $options: "i" } }],
        });
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedUser = await UserModel.deleteOne({ _id: userId });
        if (!deletedUser) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: deletedUser });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
