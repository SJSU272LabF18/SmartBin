import React,{ Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './card.css';
import 'tachyons';
import * as Images from './../utils/images.js';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
        detailsofProperty:'',
    }
  }
  render() {
    return(
          <div className="card-container">
            <div className='bg-light-orange dib br3 pa3 ma2 grow bw2 shadow-5'>
                {/* <img className="logo" alt = "home" src= {Images.retrievePropertyImages((parseInt(Math.random()*100)%4).toString())} /> */}
              <div className="card-data">
                <Link to={{ pathname: "/graphdata", state: this.props.bin._id }}><p className="para-description " >Bin ID : {this.props.bin._id} </p></Link>
                <table className="card-data">
                  <tr>
                    <td> <h4 className="bold-heading-1"> Last Noted Height of the dustbin  : {this.props.bin.capacity[this.props.bin.capacity.length-1].height}</h4></td>
                  </tr>
                  <tr>
                    <td> <h4 className="bold-heading-1"> Maximum height of the dustbin is  :  {this.props.bin.max_height}</h4></td>
                  </tr>
                  <tr>
                    <td> <h4 className="bold-heading-1"> Location of bin is :  {this.props.bin.location}</h4></td>
                  </tr>
               </table>
             </div>
        </div>
    </div>

      );
  }
}

export default Card;
