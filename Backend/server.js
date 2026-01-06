import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./config/db.js";
//configration
dotenv.config();

//db
connectDb();

//localhost
app.listen(process.env.PORT || 5000,()=>{
    console.log(`localhost running at ${process.env.PORT}`)
});
