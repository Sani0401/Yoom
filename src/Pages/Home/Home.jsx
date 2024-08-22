import React from 'react'
import { userDetails } from "../../Services/getUserDetails"
import { Components } from '../../Exports/Componenets';
function Home() {
    console.log("This is the user details: ", userDetails);
    
  return (
    <div className='Home__mainContainer'>
        <Components.HeaderBar/>
    </div>
  )
}

export default Home