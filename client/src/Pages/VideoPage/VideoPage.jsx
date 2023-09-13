import React, { useEffect } from 'react';
// import vid from '../../Components/Video/vid.mp4';
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from '../../Components/Comments/Comments';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { addToHistory } from '../../actions/History';
import { viewVideo } from '../../actions/video';


function VideoPage() {
    const {vid} = useParams();
    const dispatch = useDispatch();
    // console.log(vid);
    const vids = useSelector((state) => state.videoReducer);
    const CurrentUser = useSelector((state) => state.currentUserReducer);
    const handleHistory = () => {
        dispatch(
            addToHistory({
                videoId:vid,
                Viewer: CurrentUser.result._id,
            })
        );
    };
    const handleViews = () => {
        dispatch(viewVideo({
            id:vid
        }))
    };
    useEffect(() => {
      if (CurrentUser) {
        handleHistory();
      }
      handleViews();
    },[]);
    
    const vv = vids.data.filter((q) => q._id === vid)[0];
  return (
    <>
        <div className="container_videopage">
            <div className="container2_videopage">
                <div className="video_display_screen_videopage">
                    <video 
                    // src={`http://localhost:5500/${vv.filePath}`}
                    src={`https://youtubeclone-yak1.onrender.com/${vv.filePath}`}
                    className={'video_showvideo_videopage'}
                    controls
                    autoPlay>
                    </video>
                    <div className="video_details_videopage">
                        <div className="video_btns_title_videopage_cont">
                            <p className="video_title_videopage">{vv.videoTitle}</p>
                            <div className="views_date_btns_videopage">
                                <div className="views_videopage">
                                    {vv.Views} views <div className="dot"></div> {moment(vv.createdAt).fromNow()}
                                </div>
                                <LikeWatchLaterSaveBtns vv={vv} vid={vid}/>
                            </div>
                        </div>
                        
                            <Link to={`/channel/${vv.videoChannel}`} className="chanel_details_videopage">
                                <b className='chanel_logo_videopage'>
                                    <p>{vv.Uploader.charAt(0).toUpperCase()}</p>
                                </b>
                                <p className="chanel_name_videopage">{vv.Uploader}</p>
                            </Link>
                            <div className="comments_videopage">
                                <h2>
                                    <u>Comments</u>
                                </h2>
                                <Comments videoId={vv._id}/>
                            </div>
                    </div>
                </div>
                <div className="morevideobar">
                    More Video
                </div>
            </div>
        </div>
    </>
  )
}

export default VideoPage;