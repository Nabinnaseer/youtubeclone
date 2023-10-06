import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {
      MdOutlineExplore,
      MdOutlineSubscriptions, 
      MdOutlineVideoLibrary,
   } from 'react-icons/md';
import './leftsidebar.css';
import {NavLink} from "react-router-dom";
import shorts from './shorts.png';

function LeftSidebar() {
  return (
    <div className='container_leftsidebar'>
       <NavLink to={'/'} className='icon_sidebar_div'>
          <AiOutlineHome size={22} className='icon_sidebar'/>
          <div className="text_sidebar_icon">Home</div>
       </NavLink>
       <div className='icon_sidebar_div'>
          <MdOutlineExplore size={22} className={"icon_sidebar"} style={{margin:'auto 1.2rem'}}/>
          <div className="text_sidebar_icon">Explore</div>
       </div>
       <div className='icon_sidebar_div'>
          <img src={shorts} alt='shorts' width={22} className='icon_sidebar'/>
          <div className="text_sidebar_icon">Shorts</div>
       </div>
       <div className='icon_sidebar_div'>
          <MdOutlineSubscriptions size={22} className='icon_sidebar'/>
          <div className="text_sidebar_icon" style={{fontSize:"12px"}}>Subscriptions</div>
       </div>
       <NavLink to={'/library'} className='icon_sidebar_div'>
          <MdOutlineVideoLibrary size={22} className='icon_sidebar'/>
          <div className="text_sidebar_icon">Library</div>
       </NavLink>
       <NavLink to={'/hwl'} className='icon_sidebar_div'>
          <MdOutlineVideoLibrary size={22} className='icon_sidebar'/>
          <div className="text_sidebar_icon">HWL</div>
       </NavLink>
    </div>
  )
}

export default LeftSidebar