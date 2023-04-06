const express=require("express")
const {upload}=require("../helpers/fileHelper")
const {singleFileupload,multifileupload}=require("../controller/fileuploadcontroller")
const router=express.Router();

router.post('/singleFile',upload.single('file'),singleFileupload);
router.post("/multiFile",upload.array('files'),multifileupload);


module.exports={
   routes: router
}