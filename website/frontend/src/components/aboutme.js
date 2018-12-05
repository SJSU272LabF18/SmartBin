import pic from './smartbin.png';
import pic1 from './image.jpeg';
import trash from './trash.jpg';
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
class aboutme extends Component {
    state = {  }
    render() { 
        return (  
            <div style={{"background-blend-mode": "darken"}}>
            {/* // <div className="images">
            // <img  src={pic1}/></div>
            // <h1>hello</h1> 
            // <div> */}
            <img style={{ width: 150, height:70, "margin-left":"30px", "margin-top":"20px" }} src={pic}/>  
            <h1 style={{"margin-left":"390px", "margin-top":"-50px", color:"rgb(12, 148, 226)" }}>SMARTBIN CAPACITY NOTIFIER</h1>
            <h4 style={{"margin-left":"1000px", "margin-top":"-50px"}}><Link to="/aboutme">About</Link></h4> 
            <h4 style={{"margin-left":"1090px", "margin-top":"-40px"}}><Link to="/dashboard">Dashboard</Link></h4>
            <h4 style={{"margin-left":"1200px", "margin-top":"-40px"}}>Blog</h4><br/><hr/>
            {/* // </div> */}
            <img style={{ width: 500, height:400, "margin-left":"100px", "margin-top":"100px" }} src={trash}/>
            <h2 style={{"margin-left":"800px", "margin-bottom":"-50px", "margin-top":"-400px"}}>SMARTBIN CAPACITY NOTIFIER</h2>
            <p style={{"margin-left":"700px", "margin-bottom":"-10px"}}>
            Smartbin Capacity Notifier is used to notify the administrator regarding the capacity of the bins installed. 
            On the dashboard
            </p>
            </div>
        );
    }
}
 
export default aboutme;