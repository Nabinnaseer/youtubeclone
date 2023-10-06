import mongoose from "mongoose";

const subscribeSchema = mongoose.Schema({
    subscriber:{type:String,require:true},
    channel:{type:String,require:true},
    SubscribedAt:{type:Date, default:Date.now}
})

export default mongoose.model('subscribe',subscribeSchema)