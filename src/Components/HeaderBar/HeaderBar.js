import React from 'react'
import './HeaderBar.css'
import { Images } from '../../Exports/Images'
import { userDetails } from '../../Services/getUserDetails'
function HeaderBar() {
  return (
   <div className='HeaderBar__mainContainer'>
    <img src={Images.logoIcon} className='HeaderBar__logoImage'/>
    <img src ={userDetails.user.user_metadata.avatar_url} className='HeaderBar__accountImage'/>
   </div>
  )
}

export default HeaderBar