import React, { Component } from 'react';
import { Grid, Row, Col, Panel} from 'react-bootstrap';

class InfoPanel extends Component{
    render(){
        const loermIpsum = " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.";

        return(
            <Grid>            
                <Row  className="show-grid panel-top-padding">
                    <Col sm={4} md={4}><Panel>{loermIpsum}</Panel></Col>
                    <Col sm={4} md={4}><Panel>{loermIpsum}</Panel></Col>
                    <Col sm={4} md={4}><Panel>{loermIpsum}</Panel></Col>
                </Row>
            </Grid>
        )
    }    
}

export default InfoPanel;