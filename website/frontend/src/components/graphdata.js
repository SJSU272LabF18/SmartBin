import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './applicantprofile.css';
import LineChart from './../graph/line_chart';
import Navbar from './../navbar/Navbar.jsx';
import {userSearch} from './../../api/Api';
import {recuriterDashBoardSearch} from './../../api/Api';
import {history} from "../../util/utils";

class GraphData extends Component {
  constructor(props) {
    super(props);
    this.state={
      displayValue:new Map()
    }
  }
  getAdminDashBoardGraph(map,label_name, header_text){
  if(map.size >0){
      var data={
        labels: labels,
        datasets:datasets,
        labelName:label_name,
        header_text:header_text
       }
    return (<LineChart data={data}/>)
  }else{
    return (<h2 style={{color:"red"}}> Analysis data not available </h2>)
  }
}

  render() {
    return (
            <div>
              <Navbar />
                <div className="header-graph">
                <h5 > Who viewed your profile </h5>
                <div className="graph-display">
                  <div className='bg-light-orange dib br1 pa1 ma1 bw1 shadow-1'>
                      <div className="car-graph-3">
                      {this.getAdminDashBoardGraph(this.state.displayValue,
                      "User Views"," User Profile views for last one month")}
                      </div>
                      <button onClick ={() => {history.push('./userprofile')}} className="btn btn-primary bookingsuccess1"><strong>Return to User Profile</strong></button>

                  </div>
                </div>
                </div>
            </div>
           );
  }
}


// function mapStateToProps(state) {
//     return {
//         userTraceActivity: state.LoginReducer.userTraceActivity,
//         currentUserDetails : state.LoginReducer.currentUserDetails
//     };
//
// }
// function matchDispatchToProps(dispatch){
//     console.log("Dispatch",dispatch);
//     return bindActionCreators({userSearch: userSearch, recuriterDashBoardSearch: recuriterDashBoardSearch}, dispatch);
// }
export default GraphData;
// export default connect(mapStateToProps,matchDispatchToProps)(ApplicantDashBoard);
