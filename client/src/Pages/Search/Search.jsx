import React from 'react';
import {useSelector} from 'react-redux';
import LeftSidebar from '../../Components/LeftSiderbar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
import { useParams } from 'react-router-dom';

function Search() {

    const {searchQuery} = useParams();
    const vids = useSelector((state) => state.videoReducer.data || []).filter((q) => q.videoTitle.toUpperCase().includes(searchQuery.toUpperCase()))
    .reverse();

  return (
   <div className='container_Pages_App'>
    <LeftSidebar/>
      <div className="container2_Pages_App">
        {
          <h3 style={{color:"white"}}>Search Results for '{searchQuery}'</h3>
        }
          <ShowVideoGrid vids={vids}/>
      </div>
   </div>
  );
}

export default Search;