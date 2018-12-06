// import React,{ Component } from 'react';
// // import {connect} from 'react-redux';
// // import {bindActionCreators} from 'redux';
// import './applicantprofile.css';
// import BarChart from './barchart';
// import {Link} from 'react-router-dom';
// import axios from 'axios';
// class GraphData extends Component {
//
//   constructor(props) {
//     super(props);
//     this.displayValue =[];
//     this.heightValue = [];
//
//     this.state={
//       datamap1:null,
//       datamap2:null,
//       flag:false,
//       bin_id:"5c077d7be7179a6ca082a5c0"
//     }
//     this.parseData = this.parseData.bind(this);
//     // this.getAdminDashBoardGraph = this.getAdminDashBoardGraph.bind(this);
//   }
//   //5bfeef7033a5340fd7215b7a
// //
//   componentDidMount() {
//     const value={
//       id : "5bfeef7033a5340fd7215b7a"
//     }
//       let ID = this.props._id;
//       axios.post(`http://localhost:3001/bininfo/`+"5bfeef7033a5340fd7215b7a")
//         .then((response) => {
//         if(response.status == 200)
//         {
//             console.log("bin data response : ", response.data);
//             this.displayValue = response.data.bindata
//             this.setState({
//               flag:true
//             })
//         }else{
//             alert("Something went wrong!!")
//         }
//     })
//   }
//   parseData(){
//     var labelArray = new Array();
//     var datamap = new Map();
//     var dataset = this.displayValue;
//     for(var i =2 ; i >=0;i--) {
//       var d1=new Date();
//       d1.setDate(d1.getDate() - i);
//       var oldData = d1.toISOString().split('T')[0];
//       var firstTime = d1.toISOString().split('T')[1];
//       // console.log("Value of old date:", oldData);
//       var heightSum=0;
//       var count=0;
//       for(var j=0;j<dataset.length;j++) {
//         var datevalue=dataset[j].timestamp;
//         var newdate = datevalue.toString().split('T')[0];
//         // console.log("Here I am", newdate);
//         if(oldData.split('-')[2]==newdate.split('-')[2]) {
//           // console.log("Inside if");
//           heightSum+=dataset[j].height;
//           count++;
//           var v = oldData;
//         }
//
//       }
//       var finalData=heightSum/count;
//       labelArray.push(finalData);
//       datamap.set(finalData,v);
//     }
//         this.state.datamap1 = datamap;
//         var labels = new Array();
//         var datasets = new Array();
//         // for(let [key, value] of this.state.datamap1) {
//         //   console.log("Key : " +key +"value: " +value);
//         // }
//         for(let [key, value] of this.state.datamap1) {
//           labels.push(value);
//           datasets.push(key);
//         }
//
//     if(this.state.datamap1.size >0){
//       var data={
//         labels: labels,
//         datasets:datasets,
//         labelName:"Mean Height Per Day",
//         header_text:"Bin info"
//        }
//     return (<BarChart data={data}/>)
//     }else{
//       return (<h2 style={{color:"red"}}> Analysis data not available </h2>)
// }
//   }
//   parseDataForHeight(){
//     var d1=new Date();
//     var arrayvalue = new Array();
//     var oldData = d1.toISOString().split('T')[0];
//     var firstTime = oldData.split(':')[0];
//     var labelArray = new Array();
//     var datamap = new Map();
//     var dataset = this.displayValue;
//     var prevMaxHeight = 0;
//     for(var j=0;j<dataset.length;j++) {
//       var datevalue=dataset[j].timestamp;
//       var newdate = datevalue.toString().split('T')[0];
//       // console.log("new date obtained : ",newdate);
//       if(newdate.split('-')[2] == oldData.split('-')[2]) {
//         // console.log("data value obtained : ",datevalue);
//         var newdate1 = dataset[j].timestamp.toString().split('T')[1];
//
//         var firstTimeDataset = newdate1.split(':')[0];
//
//           // console.log("Time obtained :", parseInt(firstTimeDataset));
//         if(parseInt(firstTimeDataset)>=1 && parseInt(firstTimeDataset)<=11) {
//           if(dataset[j].height > prevMaxHeight) {
//             prevMaxHeight = dataset[j].height
//             arrayvalue[0] = prevMaxHeight;
//
//           }
//         }
//         else if(parseInt(firstTimeDataset)>=13 && parseInt(firstTimeDataset)<=19) {
//           if(dataset[j].height > prevMaxHeight) {
//             prevMaxHeight = dataset[j].height
//             arrayvalue[1] = prevMaxHeight;
//           }
//         }
//         else if (parseInt(firstTimeDataset)>=19 && parseInt(firstTimeDataset)<=23){
//           if(dataset[j].height > prevMaxHeight) {
//             prevMaxHeight = dataset[j].height
//             arrayvalue[2] = prevMaxHeight;
//           }
//         }
//     }
//     }
//       datamap.set(arrayvalue[0],"Morning");
//       console.log("day time height: ",arrayvalue[1])
//       datamap.set(arrayvalue[1],"Noon");
//       datamap.set(arrayvalue[2],"Evening");
//         this.state.datamap2 = datamap;
//         var labels = new Array();
//         var datasets = new Array();
//         // for(let [key, value] of this.state.datamap2) {
//         //   console.log("Key : " +key +"value: " +value);
//         // }
//         for(let [key, value] of this.state.datamap2) {
//           labels.push(value);
//           datasets.push(key);
//         }
//
//     if(this.state.datamap2.size >0){
//       var data={
//         labels: labels,
//         datasets:datasets,
//         labelName:"Maximum Height during daytime,noon,evening",
//         header_text:"Bin info"
//        }
//     return (<BarChart data={data}/>)
//     }else{
//       return (<h2 style={{color:"red"}}> Analysis data not available </h2>)
// }
//   }
//
//
//   render() {
//
//     return (
//             <div>
//
//                 <div className="header-graph">
//                 <h5> Weekly Analysis of Dusbin filling capacity</h5>
//                 <div className="graph-display">
//                   <div className='bg-light-orange dib br1 pa1 ma1 bw1 shadow-1'>
//                       <div className="car-graph-3">
//                       {this.state.flag==false?'':this.parseData()}
//                       {this.state.flag==false?'':this.parseDataForHeight()}
//                       </div>
//                   </div>
//                 </div>
//                 </div>
//             </div>
//            );
//   }
// }
//
//
// // function mapStateToProps(state) {
// //     return {
// //         userTraceActivity: state.LoginReducer.userTraceActivity,
// //         currentUserDetails : state.LoginReducer.currentUserDetails
// //     };
// //
// // }
// // function matchDispatchToProps(dispatch){
// //     console.log("Dispatch",dispatch);
// //     return bindActionCreators({userSearch: userSearch, recuriterDashBoardSearch: recuriterDashBoardSearch}, dispatch);
// // }
// export default GraphData;
// // export default connect(mapStateToProps,matchDispatchToProps)(ApplicantDashBoard);
