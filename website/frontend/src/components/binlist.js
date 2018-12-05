import React,{ Component } from 'react';
import './card.css';
// import { connect } from 'react-redux';
// import { Button} from 'react-bootstrap';
import Card from './card';
import 'tachyons';
import axios from 'axios';
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
    return (
              <div className="carddetails">
                    {
	                    this.state.binResults != undefined ?
	                      this.state.binResults.map((bin) => {
	                       return(<Card bin={bin}/>);
	                      })
	                      : ''
                    }
              </div>
           );
  }
}



export default BinList;
