import React from 'react';
import LeftSidebar from '../../Components/LeftSiderbar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
// import vid from '../../Components/Video/vid.mp4';
import './YourVideo.css';
import { useSelector } from 'react-redux';

function YourVideo() {
  const vids = useSelector((state) => state.videoReducer).data;
  // .filter((q)=> q.videoChannel === CurrentUser.result._id).reverse();
  const CurrentUser = useSelector((state) => state.currentUserReducer);
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
        <div className="container_yourvideos">
            <h1>Your Videos</h1>
            {
              CurrentUser?(<>
              <ShowVideoGrid vids={vids}/>
              </>):(<>
              <h3>Please Login to View Your Videos</h3>
              </>)
              
            }
        </div>
      </div>
   </div>
  )
}

export default YourVideo