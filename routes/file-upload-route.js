const express=require("express")
const {upload}=require("../helpers/fileHelper")
const {singleFileupload,multifileupload, getsinglefile, getmultifile}=require("../controller/fileuploadcontroller")
const router=express.Router();

router.post('/singleFile',upload.single('file'),singleFileupload);
router.post("/multiFile",upload.array('files'),multifileupload);
router.get("/getsinglefile",getsinglefile);
router.get("/getmultifile",getmultifile)


module.exports={
   routes: router
}