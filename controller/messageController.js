import {Message} from "../models/messageSchema..js";
import  ErrorHandler  from "../middlewares/errorMiddleware.js"
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";

export const sendMessage = catchAsyncErrors (async(req, res, next) =>{
    const {firstName, lastName, email, phone, message} = req.body;
    if(!firstName || !lastName || !email || !phone || !message){
        return next(new ErrorHandler("Please Fill full form !", 400));
       }
    await Message.create({ firstName, lastName, email, phone, message });
    res.status(200).json({
      success: true,
      message: "Message Send Successfully!",
    });
});

export const getAllMessages = catchAsyncErrors(async (req, res,next)=>{
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});