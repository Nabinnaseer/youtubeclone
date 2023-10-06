// import React, { useState } from 'react'
// import './CreateEditChannel.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { addToAccess, deleteAccess } from '../../actions/access';
// import { MdPlaylistAddCheck } from 'react-icons/md';
// import { RiPlayListAddFill } from 'react-icons/ri';

// function UserControl({setUserControl}) {
//     const CurrentUser = useSelector((state) => state.currentUserReducer || []);
//     const [access, setAccess] = useState(false);
//     const dispatch = useDispatch();
//     const toggleAccess = () =>{
//         if(CurrentUser.result)
//         {
//             if(access){
//                 setAccess(false);
//                 dispatch(deleteAccess({
//                     channel : CurrentUser.result._id,
//                 }))
//             }else{
//                 setAccess(true);
//                 dispatch(addToAccess({
//                     channel : CurrentUser.result._id,
//                 }))
//             }
//         }else{
//             alert("Please Login to Save Video")
//         }
//     };
//   return (
//     <div className='container_createeditchannel'>
//         <input type="submit" value={"X"} name='text'
//             className='ibtn_x' 
//             onClick={() => setUserControl(false)}/>
//         <div className='container2_createeditchannel'>
//             <div onClick={toggleAccess()} style={{color:"white"}}>
//                 {access ? (
//                     <>
//                     <MdPlaylistAddCheck size={22}/>
//                     <b>Turn OFF</b>
//                     </>
//                 ) : (
//                     <>
//                     <RiPlayListAddFill size={22}/>
//                     <b>Turn ON</b>
//                     </>
//                 )}
//                 </div>
//             <input type="submit" value={'Submit'}
//             className='ibtn' 
//             onClick={() => setUserControl(false)}/>
//         </div>
//     </div>
//   )
// }

// export default UserControl