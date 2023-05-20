import React from "react";
import'../Pages/login.css';
function Logindatailes(){
    const shoot = () => {
        ("you are login now");
       }
     
    return(
        
    
      <form>
        <label for="email">Email Address</label><br/>
        <input type="email" /><br/>
        <label for="pass">Password</label><br/>
        <input type="password" /><br/>
        <label for="rememberMe">Remember me</label><br/>
        <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <br/>
        <input type="submit" value="login" onClick={shoot}/>

      </form>
    

    )
}
export default Logindatailes;