import React , {useEffect} from 'react';
import { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Allroutes from './Components/Allroutes';
import DrawerSidebar from './Components/LeftSiderbar/DrawerSidebar';
import Navbar from './Components/Navbar/Navbar';
import CreateEditChannel from './Pages/Channel/CreateEditChannel';
import { fetchAllChannel } from './actions/channelUser';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';
import { getAllComment } from './actions/comments';
// import UserControl from './Pages/Channel/UserControl';
import { getAllSub } from './actions/subscribe';
import {getAllAccess} from './actions/access';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllChannel());
    dispatch(getAllVideo()); //dispatched
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
    dispatch(getAllComment());
    dispatch(getAllSub());
    dispatch(getAllAccess());
  }, [dispatch]);
  

  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display:'none',
  });
  const toggleDrawer = () => {
    if(toggleDrawerSidebar.display==='none'){
      setToggleDrawerSidebar({
        display:'flex'
      });
    }else{
      setToggleDrawerSidebar({
        display:'none'
      });
    }
  };
  const [vidUploadPage, setVidUploadPage] = useState(false)
  const [EditCreateChannelBtn, setEditCreateChannelBtn] = useState(false)
  // const [userControl, setUserControl] = useState(false)
  return (
    <>
      <Router>
      {
        vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage}/>
      }
      {
        EditCreateChannelBtn && <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn}/> 
      }
      {/* {
        userControl && <UserControl setUserControl={setUserControl}/>
      } */}
        
        <Navbar
          toggleDrawer={toggleDrawer}
          setEditCreateChannelBtn = {setEditCreateChannelBtn}
        />
        {
          <DrawerSidebar
          toggleDrawer={toggleDrawer}
          toggleDrawerSidebar={toggleDrawerSidebar}
          />
        }
        <Allroutes 
        setEditCreateChannelBtn = {setEditCreateChannelBtn}
        setVidUploadPage = {setVidUploadPage}
        // setUserControl = {setUserControl}
        />
      </Router>
    </>
  );
}

export default App;
