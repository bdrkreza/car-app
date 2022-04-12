import NextCors from "nextjs-cors";
import CarAutoModel from "../../../models/car-model";
import connectDB from "../../../utils/connectDB";
import upload from "../../../utils/image-upload";

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
        upload.array("image")(req, {}, (err) => {
          const imageFiles = [];
          for (var i = 0; i < req.files.length; i++) {
            imageFiles.push(req.files[i].path);
          }
          console.log(imageFiles);
          const newCar = CarAutoModel.create({
            ...req.body,
            images: imageFiles,
          }); /* create a new model in the database */
          res.status(201).json({ success: true, data: newCar });
        });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
