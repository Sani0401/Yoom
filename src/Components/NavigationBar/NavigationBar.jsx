import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './NavigationBar.css';
import { Images } from '../../Exports/Images';

function NavigationBar() {
  const navigate = useNavigate();  // Initialize useNavigate
  // Initialize with value from localStorage or default to 'Home'
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem('selectedNavItem') || 'Home';
  });

  useEffect(() => {
    // Update localStorage whenever selected changes
    localStorage.setItem('selectedNavItem', selected);
  }, [selected]);

  const handleSelect = (item) => {
    setSelected(item);
    if (item === 'Home') {
      navigate('/Home');  // Navigate to the 'home' route
    }
    // Add navigation for other items if needed
    if (item === 'Upcoming') navigate('/upcoming');
    if (item === 'Previous') navigate('/previous');
    if (item === 'Recordings') navigate('/recordings');
    if (item === 'Personal Room') navigate('/personal-room');
  };

  return (
    <div className='NavigationBar__mainContainer'>
      <div className='NavigationBar__mainContainer__innerContainer'>
        <span
          onClick={() => handleSelect('Home')}
          style={{
            backgroundColor: selected === 'Home' ? 'rgb(14 120 249)' : 'transparent',
            color: selected === 'Home' ? 'white' : 'inherit',
          }}
        >
          <img src={Images.homeIcon} alt="" />
          <p>Home</p>
        </span>
        <span
          onClick={() => handleSelect('Upcoming')}
          style={{
            backgroundColor: selected === 'Upcoming' ? 'rgb(14 120 249)' : 'transparent',
            color: selected === 'Upcoming' ? 'white' : 'inherit',
          }}
        >
          <img src={Images.upcomingIcon} alt="" />
          <p>Upcoming</p>
        </span>
        <span
          onClick={() => handleSelect('Previous')}
          style={{
            backgroundColor: selected === 'Previous' ? 'rgb(14 120 249)' : 'transparent',
            color: selected === 'Previous' ? 'white' : 'inherit',
          }}
        >
          <img src={Images.previousIcon} alt="" />
          <p>Previous</p>
        </span>
        <span
          onClick={() => handleSelect('Recordings')}
          style={{
            backgroundColor: selected === 'Recordings' ? 'rgb(14 120 249)' : 'transparent',
            color: selected === 'Recordings' ? 'white' : 'inherit',
          }}
        >
          <img src={Images.recordingsIcon} alt="" />
          <p>Recordings</p>
        </span>
        <span
          onClick={() => handleSelect('Personal Room')}
          style={{
            backgroundColor: selected === 'Personal Room' ? 'rgb(14 120 249)' : 'transparent',
            color: selected === 'Personal Room' ? 'white' : 'inherit',
          }}
        >
          <img src={Images.personalRoomIcon} alt="" />
          <p>Personal Room</p>
        </span>
      </div>
    </div>
  );
}

export default NavigationBar;
