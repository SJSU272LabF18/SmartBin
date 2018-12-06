import React,{ Component } from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import './applicantprofile.css';
import BarChart from './barchart';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { GoogleLogout } from 'react-google-login';
class GraphData extends Component {

  constructor(props) {
    super(props);
    this.displayValue =[];
    this.heightValue = [];

    this.state={
      datamap1:null,
      flag:false,
      bin_id:"5c077d7be7179a6ca082a5c0"
    }
    this.parseData = this.parseData.bind(this);
    // this.getAdminDashBoardGraph = this.getAdminDashBoardGraph.bind(this);
  }

  componentDidMount() {
    const value={
      id : "5c077d7be7179a6ca082a5c0"
    }
      let ID = this.props._id;
      axios.post(`http://localhost:3001/bininfo/`+"5c077d7be7179a6ca082a5c0")
        .then((response) => {
        if(response.status == 200)
        {
            console.log("bin data response : ", response.data);
            this.displayValue = response.data.bindata
            this.setState({
              flag:true
            })
        }else{
            alert("Something went wrong!!")
        }
    })

    axios.post(`http://localhost:3001/binheightinfo/`, value)
      .then((response) => {
          console.log("bin data response : ", response.data);
          this.heightValue = response.data;
          this.setState({
            flag:true
          })
          var heightArray=new Array();
          heightArray.push(0);
          heightArray.push(0);
          heightArray.push(0);
          heightArray.push(0);
          heightArray.push(0);
          heightArray.push(this.heightValue);
          var labels = [1,2,3,4,5,6]
            var data={
              labels: labels,
              datasets:heightArray,
              labelName:"Max Height",
              header_text:"Bin info"
             }
          return (<BarChart className="mychart" data={data}/>)
        })
  }
  parseData(){
    var labelArray = new Array();
    var datamap = new Map();
    var dataset = this.displayValue;
    for(var i =3 ; i >=0;i--) {
      var d1=new Date();
      d1.setDate(d1.getDate() - i);
      var oldData = d1.toISOString().split('T')[0];
      console.log("Value of old date:", oldData);
      var heightSum=0;
      var count=0;
      for(var j=0;j<dataset.length;j++) {
        var datevalue=dataset[j].timestamp;
        var newdate = datevalue.toString().split('T')[0];
        console.log("Here I am", newdate);
        if(oldData.split('-')[2]==newdate.split('-')[2]) {
          console.log("Inside if");
          heightSum+=dataset[j].height;
          count++;
          var v = oldData;
        }

      }
      var finalData=heightSum/count;
      labelArray.push(finalData);
      datamap.set(finalData,v);
    }
        this.state.datamap1 = datamap;
        var labels = new Array();
        var datasets = new Array();
        for(let [key, value] of this.state.datamap1) {
          console.log("Key : " +key +"value: " +value);
        }
        for(let [key, value] of this.state.datamap1) {
          labels.push(value);
          datasets.push(key);
        }

    if(this.state.datamap1.size >0){
      var data={
        labels: labels,
        datasets:datasets,
        labelName:"Mean Height Per Day",
        header_text:"Bin info"
       }
    return (<BarChart data={data}/>)
    }else{
      return (<h2 style={{color:"red"}}> Analysis data not available </h2>)
}
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
            <h4 style={{"margin-left":"1100px", "margin-top":"-40px"}}><Link to="/binlist">Dashboard</Link></h4>
            <h4 style={{"margin-left":"1200px", "margin-top":"-40px"}}>{localStorage.getItem("token")}</h4><br/>
            {/* <h4 style={{"margin-left":"1200px", "margin-top":"-40px"}}>Login</h4><br/><hr/> */}
            <div style={{"margin-left":"1300px", "margin-top":"-80px"}}>
            <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={logout}
    
    >
    </GoogleLogout>
           </div>
                <div className="header-graph">
                <h5> Weekly Analysis of Dusbin filling capacity</h5>
                <div className="graph-display">
                  <div className='bg-light-orange dib br1 pa1 ma1 bw1 shadow-1'>
                      <div className="car-graph-3">
                      {this.state.flag==false?'':this.parseData()}
                      </div>


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
