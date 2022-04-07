import CarAutoModel from "../../../models/car-model";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "":
      try {
        const { resName } = req.query;
        const res = await CarAutoModel.find({ $text: { $search: resName } });
        res.render("res", { res });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "GET":
      try {
        const getCarData = await CarAutoModel.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: getCarData });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "POST":
      try {
        const pet = await CarAutoModel.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: pet });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
