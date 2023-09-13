import React, { useState } from 'react'
import './VideoUpload.css'
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo } from '../../actions/video';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';

function VideoUpload({setVidUploadPage}) {
    const CurrentUser = useSelector(state => state.currentUserReducer)
    const dispatch = useDispatch();

    const [title, setTitle] = useState("")
    const [videoFile, setVideoFile] = useState("")

    const handleSetVideoFile = (e) => {
        setVideoFile(e.target.files[0]);
    }

    const [progress, setProgress] = useState(0)

    const fileOptions = {
        onUploadProgress:(progressEvent) => {
            const {loaded , total} = progressEvent;
            const percentage = Math.floor(((loaded/1000)*100)/(total/1000));
            setProgress(percentage)
            if (percentage===100) {
                setTimeout(function(){},3000);
                setVidUploadPage(false);
            }
        }
    }

    const uploadVideoFile = () =>{
        if (!title) {
            alert("Please Enter a Title")
        }
        else if (!videoFile) {
            alert("Please Attach a Video File")
        }
        else if (videoFile.size > 1000000){
            alert("Video File Size Exceeded (Less than 1KB)")
        }
        else{
            const fileData = new FormData();
            fileData.append("file",videoFile);
            fileData.append("title",title);
            fileData.append("channel",CurrentUser.result._id);
            fileData.append("Uploader",CurrentUser.result.name);
            dispatch(uploadVideo({                     //from actions (video.js) to here
                fileData : fileData, 
                fileOptions : fileOptions
            }));
        }
    }
  return (
    <div className='container_videoupload'>
        <input type="submit" value={"X"} name='text'
            className='ibtn_x' 
            onClick={() => setVidUploadPage(false)}
        />
        <div className="container2_videoupload">
            <div className='ibox_div_vidupload'>
                <input type="text"
                className='ibox_vidupload' 
                maxLength={30}
                placeholder='Enter Video Title'
                onChange={(e) => {setTitle(e.target.value)}}/>
            
                <label htmlFor="file" className='ibox_vidupload btn_vidUpload'>
                    <input type="file"
                    name="file" 
                    className='ibox_vidupload'
                    style={{fontSize:"1rem"}}
                    id="" 
                    onChange={e => {handleSetVideoFile(e)}}/>
                </label>
            </div>
            <div className='ibox_div_vidupload'>
                <input type="submit" value="Upload"
                className='ibox_vidupload btn_vidUpload' 
                onClick={() => uploadVideoFile()}/>
            </div>
            <div className='loader ibox_div_vidupload'>
                <CircularProgressbar
                value={progress}
                text={`${progress}`}
                styles={buildStyles({
                    rotation:0.25,
                    strokeLinecap:"butt",
                    textSize:"20px",
                    pathTransitionDuration:0.5,
                    pathColor:`rgba(255,255,255,${progress/100})`,
                    textColor:"#f88",
                    trailColor:"#adff2f",
                    backgroundColor:"#3e98c7"
                })}/>
            </div>
        </div>
    </div>
  )
}

export default VideoUpload