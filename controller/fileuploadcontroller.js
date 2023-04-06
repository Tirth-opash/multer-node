const SingleFile=require("../models/singleFile") 
const Multifile=require("../models/multiplefile")

const singleFileupload=async(req,res,next)=>{
    try {
        const file = new SingleFile({
            fileName:req.file.originalname,
            filePath:req.file.path,
            fileType:req.file.mimetype,
            fileSize:req.file.size
        })
        await file.save();
        res.status(200).send("file upload succesfully...")      
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const multifileupload=async(req,res,next)=>{
    try {
        const fileArray=[];
        req.files.forEach(element => {
            const file={
                fileName:element.originalname,
                filePath:element.path,
                fileType:element.mimetype,
                fileSize:element.size
            }
            fileArray.push(file)
        });
        const multifile=new Multifile({
            title:req.body.title,
            files:fileArray
        })

        await multifile.save();
        
        res.status(200).send("multifile uploaded")
        
    } catch (error) {
        res.status(400).send(error.message) 
    }
}

module.exports={
    singleFileupload,
    multifileupload
}