import subscribe from '../models/subscribe.js';
import mongoose from 'mongoose'

export const subscriptionController = async(req,res) => {
    const SubData = req.body;
    // console.log(likedVideoData)
    const addToSub = new subscribe(SubData);
    try {
        await addToSub.save();
        res.status(200).json('added to Subscriptions')
        // console.log("Done")
    } catch (error) {
        res.status(400).json(error)
    }
} 

export const getAllSubController = async (req,res) => {
    try {
        const files = await subscribe.find();
        res.status(200).send(files);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

export const deleteSubController = async(req,res) => {
    const {channel:channel,subscriber:subscriber} = req.params;
    try {
        await subscribe.findOneAndDelete({
            channel:channel,
            subscriber:subscriber
        })
        res.status(200).json({message:"Removed from Subscription"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}