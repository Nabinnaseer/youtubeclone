import React, { useEffect, useState } from 'react'
import {FaEdit, FaUpload} from 'react-icons/fa'
import './DescribeChannel.css'
import { useDispatch, useSelector } from 'react-redux'
// import {BiUserCircle} from 'react-icons/bi';
import { addToSub, deleteSub } from '../../actions/subscribe';
import { MdPlaylistAddCheck } from 'react-icons/md';
import { RiPlayListAddFill } from 'react-icons/ri';
import { addToAccess, deleteAccess } from '../../actions/access';

function DescribeChannel({setEditCreateChannelBtn , Cid,setVidUploadPage}) {
    const channels = useSelector((state) => state.channelReducers)
    // console.log(channels)
    const currentChannel = channels.filter((c) => c._id === Cid)[0];
    // console.log(currentChannel)
    const CurrentUser = useSelector((state) => state.currentUserReducer || [])

    const dispatch = useDispatch();
    const [subscribe, setSubscribe] = useState(false)
    const subscriberList = useSelector((state) => state.subReducer || []);
    const accessList = useSelector((state)=> state.accessReducer || [])
    useEffect(() => {
            if (subscriberList && subscriberList.data) {
                subscriberList.data
                  .filter(
                    (sub) =>
                      sub.channel === currentChannel._id &&
                      sub.subscriber === CurrentUser.result._id
                  )
                  .map((m) => setSubscribe(true));
              }
              if (accessList && accessList.data) {
                accessList.data
                  .filter(
                    (s) =>
                      s.channel === currentChannel._id 
                  )
                  .map((m) => setAccess(true));
              }
    },[])
    const toggleSubscribe = () => {
        if (CurrentUser.result) {
          // Check if the current user is not the owner of the channel
          if (CurrentUser.result._id !== currentChannel._id) {
            // Implement your subscription logic here
            if (subscribe) {
                setSubscribe(false);
                dispatch(
                    deleteSub({
                        channel:currentChannel._id,
                        subscriber: CurrentUser.result._id
                    })
                  )
                //   alert("Unsubscribed from Channel")
                  
            } else {
              setSubscribe(true);
              dispatch(
                addToSub({
                    channel:currentChannel._id,
                    subscriber: CurrentUser.result._id
                })
              )
            //   alert("Subscribed to the channel");
            }
          } else {
            // The current user owns the channel, so no need to show the subscribe button
            alert("You cannot subscribe to your own channel");
          }
        } else {
          alert("Please Login to Subscribe")
        }
      };

      const [access, setAccess] = useState(false);
      const toggleAccess = () =>{
            if(access){
                setAccess(false);
                dispatch(deleteAccess({
                    channel : currentChannel._id,
                }))
            }else{
                setAccess(true);
                dispatch(addToAccess({
                    channel : currentChannel._id,
                }))
            }  
    };

  return (
    <div className="container3_channel">
        <div className="channel_logo_channel">
            <b>
                {currentChannel.name.charAt(0).toUpperCase()}
            </b>
        </div>
        <div className="description_channel">
            <b> {currentChannel.name} </b>
            <p> {currentChannel.desc} </p>
            <p style={{ cursor: 'pointer' }} onClick={() => toggleSubscribe()}>
                {subscribe ? (
                    <>
                    <MdPlaylistAddCheck size={22} className='btns_videopage' />
                    <>Subscribed</>
                    </>
                ) : (
                    <>
                    <RiPlayListAddFill size={22} className='btns_videopage' />
                    <>Subscribe</>
                    </>
                )}
            </p>
        </div>

        {
            CurrentUser.result && CurrentUser.result._id === currentChannel._id && <>
                <p className='editbtn_channel' onClick={()=>{setEditCreateChannelBtn(true)}}> 
                <FaEdit/>
                <b> Edit Channel </b>
                </p>
                <p className='uploadbtn_channel' onClick={() => setVidUploadPage(true)}> 
                    <FaUpload/>
                    <b> Upload Video </b>
                </p>
                <p className='control_channel' onClick={() => toggleAccess()}> 
                  {access ? (
                      <>
                      <MdPlaylistAddCheck size={22}/>
                      <b>User Access ON</b>
                      </>
                  ) : (
                      <>
                      <RiPlayListAddFill size={22}/>
                      <b>User Access OFF</b>
                      </>
                  )}
                </p>
            </>
        }        
    </div>
  )
}

export default DescribeChannel