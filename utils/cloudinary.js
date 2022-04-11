const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: cloud_name,
  api_key: cloud_api_key,
  api_secret: cloud_api_secret,
});

export const UploadFile = {
  upload: async (image, folder, { width, height }) => {
    let res = await cloudinary.uploader.upload(image, {
      folder: `bhalogari/${folder}`,
      transformation: { width, height, crop: "fill" },
      overwrite: true,
      invalidate: true,
    });
    return res;
  },
};
