import React from "react";
import "./Login.css";
import { Images } from "../../Exports/Images";
import supabase from "../../Config/supabaseConfig";
function Login() {
  const handleGoogleSignin =async()=>{
    const user = await supabase.auth.signInWithOAuth({
     provider: 'google',
      options: {
        redirectTo: `http://localhost:3000/Home`,
      },
    })
    console.log("This is the user data: ", user);
    
  }
  return (
    <div className="Login__mainContainer">
      <div className="Login__contentContainer">
        <div className="Login__InnerContainer">
          <img src={Images.logoIcon} alt="Logo Icon" />

          <div className="Login__contentContainer__first">
            <h4 className="Login__contentContainer__title">Sign in</h4>
            <p className="Login__contentContainer__para">
              to continue to zoom_clone
            </p>
          </div>

          <div className="Login__contentContainer__googleButton" onClick={handleGoogleSignin}>
            <img src={Images.googleIcon} alt="Google Icon Here" />{" "}
            <p>Continue with google</p>
          </div>
          <div className="Login__contentContainer__dividerCotainer">
            <div className="firstContainer"></div>or
            <div className="firstContainer"></div>
          </div>

          <div className="Login__contentContainer__inputContainer">
            <span>
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </span>
            <span>
              <label>Password</label>
              <input type="text" placeholder="Password" />
            </span>
            <button >Login</button>
          </div>
         <p className="Login__footer">Don't have an account? <a href="" >Signup</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
