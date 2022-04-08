import UserModel from "../../../models/userModel";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        const { search } = req.query;
        console.log(search);
        const user = await UserModel.find({ username: search });
        /* find all the data in our database */
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const newUser = await UserModel.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: newUser });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
