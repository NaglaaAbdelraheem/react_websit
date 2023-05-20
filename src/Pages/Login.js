import React from "react";
import { useEffect, useState } from "react";
import Logindatailes from "./logindatailes";
import'../Pages/login.css';
function Login(){
  
    const [data, setdata] = useState({});
    const params = useParams();
    console.log(params);
    useEffect(() => {
      
fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    })
  })
  .then(res => res.json())
  .then(console.log);
    }, []);

    const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}

    return(
        <div className="container" >
        <h1 className="title">Hello Again!</h1>
        <p className=" title2">Welcome Back You’ve Been Missed!</p>
        <p className="ti3">To login enter Your email address and password</p>
        {data.map((product) => {
            return (
              <div className="box" key={data.id}>
                <Logindatailes Logindatailes={data} />
              </div>
            );
          })}

        </div>
    )
}
export default Login;