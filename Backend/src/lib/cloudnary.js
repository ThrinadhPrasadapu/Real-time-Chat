import { v2 as cloudnary } from "cloudinary"

import { config } from "dotenv"

config();

cloudnary.config({
    cloud_name:process.env.CLOUDNAR_NAME,
    api_key:process.env.CLOUDNAR_API_KEY,
    api_secret:process.env.CLOUDNAR__API_SECERT,
})

export default cloudnary;
