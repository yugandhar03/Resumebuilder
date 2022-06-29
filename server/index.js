import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import authRoute from "./routes/auth.js";
import session from "express-session";
import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(session({ secret: 'melody hensley is my spirit animal' }));
app.use(passport.initialize());
app.use(passport.session());

app.use( cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  }));


app.use("/user", userRouter);
app.use("/auth", authRoute);

const CONNECTION_URL = "mongodb+srv://yugandhar:7032292232@resumebuilder.b0qpp.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server Running on Port: http://localhost:${PORT}`)
        )
    )
    .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);