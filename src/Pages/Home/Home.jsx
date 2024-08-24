import React from "react";
import './Home.css'
import { userDetails } from "../../Services/getUserDetails";
import { Components } from "../../Exports/Componenets";
function Home() {
  console.log("This is the user details: ", userDetails);

  return (
    <div className="Home__mainContainer">
      <Components.HeaderBar />
      <div className="Home__NavigationBar">
        <Components.NavigationBar />
      </div>
    </div>
  );
}

export default Home;
