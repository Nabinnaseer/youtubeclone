import React from 'react';
import Home from '../Pages/Home/Home';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from "../Pages/WatchLater/WatchLater";
import LikedVideo from "../Pages/LikedVideo/LikedVideo";
import YourVideo from "../Pages/YourVideo/YourVideo";
import {  Routes,Route, } from 'react-router-dom';
import Library from '../Pages/Library/Library';
import VideoPage from '../Pages/VideoPage/VideoPage';
import Channel from '../Pages/Channel/Channel';
import Search from '../Pages/Search/Search';
import HWL from '../Pages/HWL/HWL';

function Allroutes({setEditCreateChannelBtn,setVidUploadPage}) {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/library' element={<Library/>} />
        <Route path='/history' element={<WatchHistory/>} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/likedvideo" element={<LikedVideo />} />
        <Route path="/yourvideos" element={<YourVideo />} />
        <Route path="/videopage/:vid" element={<VideoPage />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/channel/:Cid" element={
        <Channel 
          setEditCreateChannelBtn = {setEditCreateChannelBtn}
          setVidUploadPage = {setVidUploadPage}
          // setUserControl = {setUserControl} 
          />
        } />
        <Route path='/hwl' element={<HWL/>} />
    </Routes>
  );
}

export default Allroutes;