import React, { useEffect, useState } from 'react';
import {BsThreeDots} from 'react-icons/bs';
import {MdPlaylistAddCheck} from 'react-icons/md';
import {RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri';
import './LikeWatchLaterSaveBtns.css';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { likeVideo } from '../../actions/video';
import { addToLikedVideo, deleteLikedVideo} from '../../actions/likedVideo';
import {addTowatchLater, deleteWatchLater} from '../../actions/watchLater';

function LikeWatchLaterSaveBtns({vv,vid}) {
    const CurrentUser = useSelector((state) => state.currentUserReducer || [])
    const dispatch = useDispatch();
    const [SaveVideo, setSaveVideo] = useState(false);
    const [DisLikeBtn, setDisLikeBtn] = useState(false);
    const [LikeBtn, setLikeBtn] = useState(false);

    const likedVideoList = useSelector((state) => state.likedVideoReducer);
    const watchLaterList = useSelector((state) => state.watchLaterReducer);
    useEffect(() => {
        likedVideoList.data.filter(
            (q) => q.videoId === vid && CurrentUser.result && q.Viewer === CurrentUser.result._id)
            .map(m => setLikeBtn(true));
            watchLaterList.data.filter(
            (q) => q.videoId === vid && CurrentUser.result && q.Viewer === CurrentUser.result._id)
            .map(m => setSaveVideo(true));
    },[])

    const toggleSavedVideo = () =>{
        if(CurrentUser.result)
        {
            if(SaveVideo){
                setSaveVideo(false);
                dispatch(deleteWatchLater({
                    videoId: vid,
                    Viewer : CurrentUser.result._id,
                }))
            }else{
                setSaveVideo(true);
                dispatch(addTowatchLater({
                    videoId: vid,
                    Viewer : CurrentUser.result._id,
                }))
            }
        }else{
            alert("Please Login to Save Video")
        }
    }

    const toggleLikeBtn = (e,lk) =>{
        if(CurrentUser.result) {
            if(LikeBtn){
                setLikeBtn(false);
                dispatch(
                    likeVideo({
                    id:vid,
                    Like:lk-1,
                })
                ); //from actions
                dispatch(deleteLikedVideo({
                    videoId: vid,
                    Viewer: CurrentUser.result._id,
                }))
            }else{
            setLikeBtn(true);
            dispatch(
                likeVideo({
                id:vid,
                Like:lk+1,
            })
            );
            dispatch(
                addToLikedVideo({
                videoId: vid,
                Viewer: CurrentUser.result._id,
            })
            );
            setDisLikeBtn(false);
        }}
        else{
            alert("Please Login to like")
        }
    };

    const toggleDisLikeBtn = (e,lk) =>{
        if(CurrentUser.result){
            if(DisLikeBtn){
                setDisLikeBtn(false);
            }else{
            setDisLikeBtn(true);
            if (LikeBtn) {
                dispatch(likeVideo({
                    id:vid,
                    Like:lk-1,
                }));
                dispatch(deleteLikedVideo({
                    videoId: vid,
                    Viewer: CurrentUser.result._id,
                }));
            }
            setLikeBtn(false);
        }}
        else{
            alert("Please Login to like")
        }
    }

    return (
        <div className='btns_const_videoPage'>
            <div className="btn_VideoPage">
                <BsThreeDots/>
            </div>
            <div className="btn_VideoPage">
            <div className="like_videopage" onClick={(e) => toggleLikeBtn(e,vv.Like)}>
                    {
                        LikeBtn? (<>
                            <AiFillLike size={22} className='btns_videopage'/>
                            
                        </>):(<>
                            <AiOutlineLike size={22} className='btns_videopage'/>
                            
                        </>)
                        
                    }
                    <b>{vv.Like}</b>
                </div>
                <div className="like_videopage" onClick={(e) => toggleDisLikeBtn(e,vv.Like)}>
                    {
                        DisLikeBtn? (<>
                            <AiFillDislike size={22} className='btns_videopage'/>
                            
                        </>):(<>
                            <AiOutlineDislike size={22} className='btns_videopage'/>
                            
                        </>)
                    }
                    <b>DISLIKE</b>
                </div>
                <div className="like_videopage" onClick={() => toggleSavedVideo()}>
                    {
                        SaveVideo? (<>
                            <MdPlaylistAddCheck size={22} className='btns_videopage'/>
                            <b>Saved</b>
                        </>):(<>
                            
                            <RiPlayListAddFill size={22} className='btns_videopage'/>
                            <b>Save</b>
                        </>)
                    }
                </div>
                <div className="like_videopage">
                    {
                        <>
                            <RiHeartAddFill size={22} className='btns_videopage'/>
                            <b>Thanks</b>
                        </>
                    }
                </div>
                <div className="like_videopage">
                    {
                        <>
                            <RiShareForwardLine size={22} className='btns_videopage'/>
                            <b>Share</b>
                        </>
                    }
                </div>
            </div>
            </div>
    )
    }

export default LikeWatchLaterSaveBtns