// import pic from './smartbin.png';
// import pic1 from './image.jpeg';
import trash from './trash.jpg';
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
class about extends Component {
    state = {  }
    render() { 
        const responseGoogle = (response) => {
            console.log(response);
            console.log("token", response.Zi.access_token);
            localStorage.setItem("token", response.profileObj.givenName)
          }
        return (  
            <div className="images">
            {/* // <div className="images">
            // <img  src={pic1}/></div>
            // <h1>hello</h1>
            // <div> */}
            <div>
            <Link to="/about">
            <img style={{"margin-left":"30px", "margin-top":"20px" }} src="https://img.icons8.com/ios-glyphs/60/000000/delete.png"/></Link>
            <h1 style={{"margin-left":"390px", "margin-top":"-50px" }}>SMARTBIN CAPACITY NOTIFIER</h1>
            <h4 style={{"margin-left":"1000px", "margin-top":"-50px"}}><Link to="/aboutme">About</Link></h4> 
            <h4 style={{"margin-left":"1100px", "margin-top":"-40px"}}><Link to="/binlist">Dashboard</Link></h4>
            {/* <h4 style={{"margin-left":"1200px", "margin-top":"-40px"}}>Login</h4><br/><hr/> */}
            <div style={{"margin-left":"1200px", "margin-top":"-50px"}}>
            <GoogleLogin
    clientId="10318063588-g56hbiid3a16jbeclanhg7fle84b2m3r.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  /></div>
           </div></div>
        );
    }
}

export default about;
