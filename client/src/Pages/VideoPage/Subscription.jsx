// import React, { useEffect, useState } from 'react';
// // import {BsThreeDots} from 'react-icons/bs';
// import {MdPlaylistAddCheck} from 'react-icons/md';
// import {RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri';
// import './LikeWatchLaterSaveBtns.css';
// // import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
// import { useDispatch, useSelector } from 'react-redux';
// // import { likeVideo } from '../../actions/video';
// // import { addToLikedVideo, deleteLikedVideo} from '../../actions/likedVideo';
// // import {addTowatchLater, deleteWatchLater} from '../../actions/watchLater';
// import { addToSub, deleteSub } from '../../actions/subscribe';


// function Subscription({vv,setSubscribe,subscribe}) {
//     const CurrentUser = useSelector((state) => state.currentUserReducer || [])
//     const dispatch = useDispatch();
//     // const [subscribe, setSubscribe] = useState(false)
//     const subscriberList = useSelector((state) => state.subReducer || []);
//     useEffect(() => {
//             if (subscriberList && subscriberList.data) {
//                 subscriberList.data
//                   .filter(
//                     (sub) =>
//                       sub.channel === vv.videoChannel &&
//                       sub.subscriber === CurrentUser.result._id
//                   )
//                   .map((m) => setSubscribe(true));
//               }
//     },[])


//     const toggleSubscribe = () => {
//         if (CurrentUser.result) {
//           // Check if the current user is not the owner of the channel
//           if (CurrentUser.result._id !== vv.videoChannel) {
//             // Implement your subscription logic here
//             if (subscribe) {
//                 setSubscribe(false);
//                 dispatch(
//                     deleteSub({
//                         channel:vv.videoChannel,
//                         subscriber: CurrentUser.result._id
//                     })
//                   )
//                 //   alert("Unsubscribed from Channel")
                  
//             } else {
//               setSubscribe(true);
//               dispatch(
//                 addToSub({
//                     channel:vv.videoChannel,
//                     subscriber: CurrentUser.result._id
//                 })
//               )
//             //   alert("Subscribed to the channel");
//             }
//           } else {
//             // The current user owns the channel, so no need to show the subscribe button
//             alert("You cannot subscribe to your own channel");
//           }
//         } else {
//           alert("Please Login to Subscribe")
//         }
//       }
      
//     return (
//         <div className='btns_const_videoPage'>
//             <div className="btn_VideoPage">
//                 <div className="like_videopage" onClick={() => toggleSubscribe()}>
//                 {subscribe ? (
//                     <>
//                         <MdPlaylistAddCheck size={22} className='btns_videopage' />
//                         <b>Subscribed</b>
//                         </>
//                 ) : (
//                     <>
//                         <RiPlayListAddFill size={22} className='btns_videopage' />
//                         <b>Subscribe</b>
//                         </>
//                 )}
//                 </div>
//             </div>
//             </div>
//     )
//     }

// export default Subscription