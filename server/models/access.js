import mongoose from "mongoose";

const accessSchema = mongoose.Schema({
    channel:{type:String,require:true},
    AccessedAt:{type:Date, default:Date.now}
})

export default mongoose.model('access',accessSchema)