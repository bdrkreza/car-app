import CarAutoModel from "../../../models/car-model";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  const {
    query: { carId },
    method
     } = req;

  await connectDB();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
    
        const chassis = await CarAutoModel.find({
          $or: [{ chassis_number: { $regex: carId, $options: "i" } }],
        });
        if (!chassis) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: chassis });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case "DELETE":
      try {
        await CarAutoModel.findOneAndDelete(carId);
        res.send("car data deleted success");
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "PUT":
      try {
        const CarData = await UserModel.findByIdAndUpdate(carId, req.body, {
          new: true,
          runValidators: true,
        }); /* find all the data in our database */
        res.status(200).json({ success: true, data: CarData });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
  }
}
