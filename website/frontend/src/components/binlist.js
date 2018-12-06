import React,{ Component } from 'react';
import './card.css';
// import { connect } from 'react-redux';
// import { Button} from 'react-bootstrap';
import Card from './card';
import 'tachyons';
import axios from 'axios';
import pic from './smartbin.png';
import {Link} from 'react-router-dom';

import {Redirect} from 'react-router';
import { GoogleLogout } from 'react-google-login';
class BinList extends Component {
	constructor(props) {
  super(props);
  this.state = {
     binResults :[],
     userData:''
	}};

 componentWillMount()
    {
			axios.get(`http://localhost:3001/getbins/`)
							.then((response) => {
							if(response.status == 200)
							{
									console.log("bin data response : ", response.data);
									this.displayValue = response.data.bindata
									this.setState({
										binResults:response.data.bindata
									})
							}else{
									alert("Something went wrong!!")
							}
					})
    }
  render() {
	const logout = (response) => {
		console.log("logout", response);
	   // console.log("token", response.Zi.access_token);
		localStorage.removeItem('token')
		// redirectVar = <Redirect to="/about" />
		//createBrowserHistory.push('/about')
	  }
    return (
		<div>
		<Link to="/about">
		<img style={{"margin-left":"30px", "margin-top":"20px" }} src="https://img.icons8.com/ios-glyphs/60/000000/delete.png"/></Link>
		<h1 style={{"margin-left":"390px", "margin-top":"-50px" }}>SMARTBIN CAPACITY NOTIFIER</h1>
		<h4 style={{"margin-left":"1000px", "margin-top":"-50px"}}><Link to="/aboutme">About</Link></h4> 
		<h4 style={{"margin-left":"1090px", "margin-top":"-40px"}}><Link to="/binlist">Dashboard</Link></h4>
		<h4 style={{"margin-left":"1200px", "margin-top":"-40px"}}>{localStorage.getItem("token")}</h4><br/>
		<div style={{"margin-left":"1300px", "margin-top":"-80px"}}>
		<GoogleLogout
  buttonText="Logout"
  onLogoutSuccess={logout}

>
</GoogleLogout>
		 </div>
              <div className="carddetails">
                    {
	                    this.state.binResults != undefined ?
	                      this.state.binResults.map((bin) => {
	                       return(<Card bin={bin}/>);
	                      })
	                      : ''
                    }
              </div></div>
           );
  }
}



export default BinList;
