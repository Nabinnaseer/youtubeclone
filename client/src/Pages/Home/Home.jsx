import React from 'react';
import {useSelector} from 'react-redux';
import './Home.css';
import LeftSidebar from '../../Components/LeftSiderbar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
// import vid from '../../Components/Video/vid.mp4';

function Home() {

    const vids = useSelector((state) => state.videoReducer.data || []);
    const CurrentUser = useSelector((state) => state.currentUserReducer || []);
    console.log(vids);

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

  const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "SQL",
    "Ruby",
    "React",
    "Javascript",
    "Typescript",
    "Python",
    "Java",
    "C++",
    "SQL",
    "Ruby",
    "Python",
    "Java",
  ]
  return (
   <div className='container_Pages_App'>
    <LeftSidebar/>
      <div className="container2_Pages_App">
        <div className="navigation_Home">
          {
            NavList.map((m)=> {
              return (<p key={m} className="btn_nav_home">
                {m}
              </p>)
            })
          }
        </div>
          {
            CurrentUser.result && CurrentUser ? (<>
              <ShowVideoGrid vids={vids}/>
            </>):(<>
            <center><h1 style={{color:"white"}}>Login to view</h1></center>
            </>)
          }
      </div>
   </div>
  )
}

export default Home