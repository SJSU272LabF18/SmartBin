import React,{ Component } from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import './applicantprofile.css';
import BarChart from './barchart';
import {Link} from 'react-router-dom';
import {BinList} from './binlist.js';
// import Navbar from './../navbar/Navbar.jsx';
// import {userSearch} from './../../api/Api';
// import {recuriterDashBoardSearch} from './../../api/Api';
// import {history} from "../../util/utils";

class DashBoard extends Component {

  render() {
    return (
            <div>
              
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
export default DashBoard;
// export default connect(mapStateToProps,matchDispatchToProps)(ApplicantDashBoard);
