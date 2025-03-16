const express = require ('express')

const {
  addEvent,
  getAllEvents

 }=require('../Controller/eventController');

const router = express.Router();
const{upload}=require("../Middleware/userMiddleware");





router.route("/").post( upload.single("eventPic"),addEvent);
router.route("/").get(getAllEvents);




module.exports=router;