import React from 'react'
import './NavigationBar.css'
import { Images } from '../../Exports/Images'
function NavigationBar() {
  return (
    <div className='NavigationBar__mainContainer'>
        <div className='NavigationBar__mainContainer__innerContainer'>
        <span><img src={Images.homeIcon} alt="" /><p>Home</p></span>
        <span> <img src={Images.upcomingIcon} alt="" /> <p>Upcoming</p></span>
        <span> <img src={Images.previousIcon} alt="" /> <p>Previous</p></span>
        <span><img src={Images.recordingsIcon} alt="" /><p>Recordings</p></span>
        <span> <img src={Images.personalRoomIcon} alt="" /> <p>Personal Room</p></span>
        </div>
        
    </div>
  )
}

export default NavigationBar