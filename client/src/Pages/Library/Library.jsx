import React from 'react';
import './Library.css';
import LeftSidebar from '../../Components/LeftSiderbar/LeftSidebar';
// import vid from '../../Components/Video/vid.mp4';
import {FaHistory} from 'react-icons/fa';
import {AiOutlineLike} from 'react-icons/ai';
import {MdOutlineWatchLater} from 'react-icons/md';
import WHLVideoList from '../../Components/WHL/WHLVideoList';
import { useSelector } from 'react-redux';

function Library() {
  // const CurrentUser = useSelector((state) => state.currentUserReducer);
  const watchLaterList = useSelector((state) => state.watchLaterReducer);
  const historyList = useSelector((state) => state.HistoryReducer);
  const likedVideoList = useSelector((state) => state.likedVideoReducer);
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Chanel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     Uploader: "abc",
  //     description: "description of  video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Chanel: "cdd",
  //     title: "video 2",
  //     Uploader: "abc",
  //     description: "description of  video 2",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     Uploader: "abc",
  //     description: "description of  video 3",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 4",
  //     Uploader: "abc",
  //     description: "description of  video 4",
  //   },
  // ];
  return (
    <div className='container_Pages_App'>
     <LeftSidebar/>
       <div className="container2_Pages_App">
           <div className="container_librarypage">
                <h1 className="title_container_librarypage">
                  <b>
                    <FaHistory/>
                  </b>
                  <b>History</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                  <WHLVideoList
                  page={'History'}
                  videoList={historyList}
                  // CurrentUser = {CurrentUser.result._id}
                  />
                </div>   
           </div>
           <div className="container_librarypage">
                <h1 className="title_container_librarypage">
                  <b>
                    <MdOutlineWatchLater/>
                  </b>
                  <b>Watch Later</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                  <WHLVideoList
                  page={'Watch Later'}
                  videoList={watchLaterList}
                  // CurrentUser = {CurrentUser.result._id}
                  />
                </div>   
           </div>
           <div className="container_librarypage">
                <h1 className="title_container_librarypage">
                  <b>
                    <AiOutlineLike/>
                  </b>
                  <b>Liked Video</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                  <WHLVideoList
                  page={'Liked Video'}
                  videoList={likedVideoList}
                  // CurrentUser = {CurrentUser.result._id}
                  />
                </div>   
           </div>
       </div>
    </div>
   );
}

export default Library