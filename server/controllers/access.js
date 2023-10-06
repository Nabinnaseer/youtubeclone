import access from '../models/access.js';
import mongoose from 'mongoose'

export const accessController = async(req,res) => {
    const AccessData = req.body;
    // console.log(likedVideoData)
    const addToAccess = new access(AccessData);
    try {
        await addToAccess.save();
        res.status(200).json('added to Access')
        // console.log("Done")
    } catch (error) {
        res.status(400).json(error)
    }
} 

export const getAllAccessController = async (req,res) => {
    try {
        const files = await access.find();
        res.status(200).send(files);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

export const deleteAccessController = async(req,res) => {
    const {channel:channel} = req.params;
    try {
        await access.findOneAndDelete({
            channel:channel
        })
        res.status(200).json({message:"Removed from Access"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}