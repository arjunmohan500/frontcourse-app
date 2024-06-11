const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "coursetitle":{type:String,require:true},
        "description":{type:String,require:true},
        "date":{type:String,require:true},
        "duration":{type:String,require:true},
        "venue":{type:String,require:true},
        "trainername":{type:String,require:true}
    }
)
let coursemodel=mongoose.model("course",schema);
module.exports={coursemodel}