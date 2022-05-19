import NextCors from "nextjs-cors";
import CarUploadModel from "../../../models/car_upload";
import connectDB from "../../../utils/connectDB";

// Initializing the cors middleware
// export const cors = Cors({
//   methods: ["GET", "HEAD"],
// });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { method } = req;

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  await connectDB();
  switch (method) {
    // case "":
    //   try {
    //     const { search } = req.query;
    //     console.log(search);
    //     const res = await CarAutoModel.find(search);
    //     res.render("res", { res });
    //   } catch (error) {
    //     res.status(400).json({ success: false, error });
    //   }
    //   break;
    case "GET":
      try {
        const getCarData = await CarUploadModel.find(
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
        console.log(req.body);
        const chassis_number = CarUploadModel.findOne({ cn: req.body.cn });
        if (chassis_number) {
          res.status(400).json({ success: "chassis number is here" });
        }

        const newCar = CarUploadModel.create(
          req.body
        ); /* create a new model in the database */

        res.status(201).json({ success: true, data: newCar });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
