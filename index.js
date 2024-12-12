import express from "express";

import authRoutes from './Routes/authRoutes.js';


import mongoose from "mongoose";
import fileUpload from "express-fileupload";
const port = 5000;
import cors from 'cors';
import cookieParser from "cookie-parser";
const app = express();

// app.use(cors()); thi is for upto localstorage and cookie ma cors banauda chai down(tala) xa

app.use(cors(
  {
    // origin: ['https://mern-shrawan.onrender.com'], //frontend origin
    // origin: 'http://localhost:3000',
    origin: 'http://localhost:3000',
    credentials: true
  }
));

app.use(cookieParser());
app.use(express.json());
app.use(express.static('uploads'));

app.use(fileUpload({
  // limits: { fileSize: 5 * 1024 * 1024 },
}));

mongoose.connect('mongodb+srv://rulokifs:mongodb@cluster0.xlryd.mongodb.net/Grocery').then((val) => {

}).catch((err) => {
  console.log(err);
});


app.use('/api/users', authRoutes);   ///api/users to connect endpoint + usercontroller.js ko signup or log

app.listen(port, () => {
  console.log('listening and connected');
});

