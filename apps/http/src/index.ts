import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from 'cors'
import v1Routes from "./routes/v1/index.js";
import ErrorMiddleware from "./middlewares/err.middleware.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", v1Routes);

app.use(ErrorMiddleware);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
