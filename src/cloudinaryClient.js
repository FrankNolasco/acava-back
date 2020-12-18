const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "df2qe03bs",
  api_key: "391724273177678",
  api_secret: "3XxIbr-rzuLhd_zhiSJjUyUTYVY",
});

const cloudinaryClient = cloudinary;

module.exports = { cloudinaryClient };
