const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const GuidContact =new Schema({
   message:{
       type:String
   } 
})

const newGuideContact=mongoose.model("contactGuid",GuidContact);

module.exports=newGuideContact;
