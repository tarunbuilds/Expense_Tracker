import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";
import cors from "cors";

// configuration
const app = express();

//middleware
app.use(
  cors({
    orgin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

export default app;
