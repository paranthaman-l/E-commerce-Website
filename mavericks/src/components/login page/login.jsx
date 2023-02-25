
import {useState} from 'react';
import { auth, provider } from '../../firebase';
import "./login.css";

function Login() {
  const[user, setUser] = useState(null);

  const googleLogin = async()=>{
    try{
      await auth.signInWithPopup(provider)
      setUser(await auth.currentUser);
    } catch(error){
      console.log(error);
    }
  };
console.log(user);
  return (
    <>
      <div id="logobox">
        <img id='logo' src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1670425438/M_logo1_cdv8sh.png" alt="Mavericks logo"/>
      </div>
        <div id="loginbox">
          <form id='mainform'>

            <form id='form1' action=''>

              <div id="googlelogo">         
                <img id='googlebox' src='https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png' onClick={googleLogin} alt="Google sign-in logo"/>
              </div>

              <div id='or'>
              <hr></hr>
              </div>
                      
              <div className='mailandotp'>
                <input type="email" name="username" id="userid" placeholder="Email" required/><br/>
                <button type="submit" id="generateotp"><b>Generate OTP</b></button><br/>
              </div>
              </form>

              <form id='form2'>

              <div className='verification'>
                <input type="password" name="password" id="pw" placeholder="Enter OTP" required/><br/>
                <button id="verify"><b>Verify</b></button><br/>
              </div>

              <div id="signuptext">
                <span id="newuser"><b>New User? </b></span>
                <span id="signup"><b><u> create a new account</u></b></span>
              </div>
          </form>          
        </form>

      </div>
      </>

  );
}

export default Login;
