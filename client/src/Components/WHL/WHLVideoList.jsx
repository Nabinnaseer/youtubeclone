import React from 'react';
import ShowVideoList from '../ShowVideoList/ShowVideoList';
import { useSelector } from 'react-redux';

function WHLVideoList({page,videoList
    // CurrentUser
}) {
    const CurrentUser = useSelector((state) => state.currentUserReducer);
    console.log(videoList);
  return (
    <>
        {   CurrentUser? (<> 
            {
                 videoList.data.filter(q=>q.Viewer === CurrentUser.result._id).reverse().map(m => {
                    return(
                        <>
                            <ShowVideoList videoId={m.videoId} key={m._id}/>
                        </>
                    )
                })
            }
        </>):(<>
            <h2 style={{color:"white"}}>Please Login to View {page} </h2>
         </>)
           
        }
    </>
  )
}

export default WHLVideoList