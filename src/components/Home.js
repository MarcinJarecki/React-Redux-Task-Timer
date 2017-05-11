import React, {Component} from 'react';
import HeroPage from './home/HeroPage';
import InfoPanel from './home/InfoPanel';
//import { Grid, Row, Col, Panel} from 'react-bootstrap';

class Home extends Component{
    render(){
        return(
          <div className="App">  
            <HeroPage />
            <InfoPanel />             
          </div>  
        )
    }
}

export default Home;