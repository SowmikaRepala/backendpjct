//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config();
connectDB();
console.log(process.env.MONGODB_URI);
/*
//first approach
const app = express()
(async () => {
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
        console.log("ERROR:",error)
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${
            process.env.PORT}`);
        })
    }
  
    catch(error){
    console.error("ERRROR:",error)
    throw err
  }
})()
  */
