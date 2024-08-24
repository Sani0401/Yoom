import React from 'react'
import './HeaderBar.css'
import { Images } from '../../Exports/Images'
import { userDetails } from '../../Services/getUserDetails'
function HeaderBar() {
  console.log("This is the user detail: ", userDetails.user.user_metadata.avatar_url);
  
  return (
   <div className='HeaderBar__mainContainer'>
    <img src={Images.logoIcon} className='HeaderBar__logoImage'/>
    <img
  src={userDetails.user.user_metadata.avatar_url}
  className='HeaderBar__accountImage'
  onError={(e) => {
    e.target.src = 'path/to/default/image.png'; // Fallback image
    console.log("Failed to load avatar image.");
  }}
/>
   </div>
  )
}

export default HeaderBar