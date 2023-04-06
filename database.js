const mongoose=require("mongoose")

const a = mongoose.connect("mongodb+srv://tirthghelani0701:tirth123@cluster0.xavbgyh.mongodb.net/multer?retryWrites=true&w=majority").then(()=>{
    console.log("database connected");
})

module.exports = a;