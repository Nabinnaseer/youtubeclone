import React from 'react'
import './HWL.css'
import LeftSidebar from '../../Components/LeftSiderbar/LeftSidebar';
import {AiOutlineLike} from 'react-icons/ai';
import {MdOutlineWatchLater} from 'react-icons/md';
import WHLVideoList from '../../Components/WHL/WHLVideoList';
import { useSelector } from 'react-redux';

function HWL() {
    // const CurrentUser = useSelector((state) => state.currentUserReducer);
   // const watchLaterList = useSelector((state) => state.watchLaterReducer);
    const historyList = useSelector((state) => state.HistoryReducer);
    const likedVideoList = useSelector((state) => state.likedVideoReducer);

    return (
      <div className='container_Pages_App'>
       <LeftSidebar/>
         <div className="container2_Pages_App">
             <div className="container_librarypage">
                  <h1 className="title_container_librarypage">
                    <b>
                    <MdOutlineWatchLater/>
                    </b>
                    <b>Watched History</b>
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

export default HWL