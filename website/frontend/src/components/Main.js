import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import about from './about';
import aboutme from './aboutme';
import dashboard from './dashboard';
import GraphData from './graphdata';
import BinList from './binlist';
class Main extends Component {
    render(){
        return(
            <div>

                {/* <Route path="/home" component={landingpage}/> */}
                <Route path="/about" component={about}/>
                <Route path="/aboutme" component={aboutme}/>
                <Route path="/dashboard" component={dashboard}/>
                <Route path="/graphdata" component={GraphData}/>
                <Route path="/binlist" component={BinList}/>

            </div>
        )
    }
}
//Export The Main Component
export default Main;
