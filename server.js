import app from './app.js';
import cloudinary from 'cloudinary';

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors (
    {
        origin : ["https://doc-booker-front-end.vercel.app/"],
        methods : ["POST","GET","PUT","DELETE"],
        credentials : true
        
    } 
));

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${4000}`);
})
