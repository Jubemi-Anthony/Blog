import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import allRoutes from "./routes/routes.js"

dotenv.config();
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.get('/', (req, res) =>{
    res.send('APP IS RUNNING');
});

app.use('/post', allRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`SERVER STARTED ON PORT: ${PORT}`));