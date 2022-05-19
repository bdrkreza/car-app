import UserModel from "../../../models/userModel";
import connectDB from "../../../utils/connectDB";
import upload from "../../../utils/image-upload";

export const config = {
  api: {
    bodyParser: false,
  },
};

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
        upload.array("image")(req, {}, (err) => {
          const host = req.headers.host;
          console.log(req);
          const imageFiles = [];
          for (var i = 0; i < req.files.length; i++) {
            const filePath =
              req.method + "://" + host + "/" + req.files[i].originalname;
            imageFiles.push(filePath);
          }
          console.log(imageFiles);
          // const newUser = UserModel.create({
          //   ...req.body,
          //   image: req.files,
          // }); /* create a new model in the database */
          // res.status(201).json({ success: true, data: newUser });
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
