const cloudinary = require("cloudinary");
const path = require('path')

cloudinary.config({
  cloud_name: "df2qe03bs",
  api_key: "391724273177678",
  api_secret: "3XxIbr-rzuLhd_zhiSJjUyUTYVY",
});


const subirImagenCloudinary = async(image_name) => {
  try {
    return await cloudinaryClient.v2.uploader.upload(path.join(__dirname,`/public/uploads/${image_name}`));
  } catch (error) {
    return null  
  }
}

const cloudinaryClient = cloudinary;

module.exports = { cloudinaryClient , subirImagenCloudinary };
