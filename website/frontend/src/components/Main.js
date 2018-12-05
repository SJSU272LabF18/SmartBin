import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './landingpage';

class Main extends Component {
    render(){
        return(
            <div>
              
               
                <Route path="/home" component={LandingPage}/>
                
               
                

                
            </div>
        )
    }
}
//Export The Main Component
export default Main;