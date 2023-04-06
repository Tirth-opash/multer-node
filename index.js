const express=require("express")
const app=express();
const path=require("path")
const cors=require("cors")
const bodyparser=require("body-parser")
const fileroutes=require("./routes/file-upload-route")
require("./database");

app.use(cors())
app.use(bodyparser.json())
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.use('/api',fileroutes.routes)

app.listen(8000);
