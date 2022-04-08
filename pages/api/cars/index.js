import CarAutoModel from "../../../models/car-model";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        const { search } = req.query;
        console.log(search);
        const res = await CarAutoModel.find(search);
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
        res
          .status(200)
          .json({ success: true, chassis_number_prefix: getCarData });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "POST":
      try {
        const cars = await CarAutoModel.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: cars });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
