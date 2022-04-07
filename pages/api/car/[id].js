import CarAutoModel from "../../../models/car-model";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "DELETE":
      try {
        await CarAutoModel.findOneAndDelete({ _id: req.query.id });
        res.send("car data deleted success");
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "PUT":
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
