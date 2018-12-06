import pic from './smartbin.png';
import pic1 from './image.jpeg';
import trash from './trash.jpg';
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { GoogleLogout } from 'react-google-login';
//mport {history} from "../../util/utils";
//import { createBrowserHistory } from 'history';
class aboutme extends Component {
    state = {  }
    render() { 
        let redirectVar = null;
      
        if (!localStorage.getItem("token")) {
            redirectVar = <Redirect to="/about" />
            //createBrowserHistory.push('/about')
        }
        const logout = (response) => {
            console.log("logout", response);
           // console.log("token", response.Zi.access_token);
            localStorage.removeItem('token')
            redirectVar = <Redirect to="/about" />
            //createBrowserHistory.push('/about')
          }
        return (  
            <div style={{"background-blend-mode": "darken"}}>
            {redirectVar} 
            {/* // <div className="images">
            // <img  src={pic1}/></div>
            // <h1>hello</h1> 
            // <div> */}
            <Link to="/about">
            <img style={{"margin-left":"30px", "margin-top":"20px" }} src="https://img.icons8.com/ios-glyphs/60/000000/delete.png"/>  </Link>
            <h1 style={{"margin-left":"390px", "margin-top":"-50px" }}>SMARTBIN CAPACITY NOTIFIER</h1>
            <h4 style={{"margin-left":"1000px", "margin-top":"-50px"}}><Link to="/aboutme">About</Link></h4> 
            <h4 style={{"margin-left":"1090px", "margin-top":"-40px"}}><Link to="/binlist">Dashboard</Link></h4>
            <h4 style={{"margin-left":"1200px", "margin-top":"-40px"}}>{localStorage.getItem("token")}</h4><br/><hr/>
            <div style={{"margin-left":"1300px", "margin-top":"-80px"}}>
            <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={logout}
    
    >
    </GoogleLogout>
             </div>
            <img style={{ width: 500, height:400, "margin-left":"100px", "margin-top":"100px" }} src={trash}/>
            <h2 style={{"margin-left":"800px", "margin-bottom":"-50px", "margin-top":"-400px"}}>SMARTBIN CAPACITY NOTIFIER</h2><br/>
            <p style={{"margin-left":"650px", "margin-top":"70px", "font-size":"20px", "margin-right":"100px"}}>
            There are large number of garbage bins in the university. The filling rate of each dustbin varies i.e,
            some get filled faster than others. This needs attention otherwise it can start to stink affecting negatively on health 
            or causing inconvenience to the people passing by. <br/><br/><br/>
            SMARTBIN securely monitors a container’s fill-level and sends real-time data to SmartBinDashboard Web Application, our cloud-based monitoring and data analytics platform. 
            SMARTBIN can be easily attached to any type of container or tank to monitor any type of waste, including solids and liquids. 
            Together with the cloud platform, SMARTBIN enables cities and waste management companies to increase their operational waste collection efficiently.
            
            {/* SMARTBIN is used to notify the administrator regarding the capacity of the bins installed. 
            It does this using the sensor attached to each bin which in turn will inform the administrator whenever it gets filled fully.
            The dashboard page displays the list of bins installed. When a particular bin is selected, the administrator can have a 
            glance at various attributes of the bin i.e. Max Volume, Current Volume, Current Status, Expected Remaining Time to fill
            Bar graph for Capacity history of the bin for last 7 days, Bar graph for current height the garbage is filled upto. */}


           
            </p>
            </div>
        );
    }
}
 
export default aboutme;