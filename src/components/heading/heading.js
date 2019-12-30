import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './heading.module.css';



class heading extends Component{
    render(){
        return(
            <Container className={classes.header}>
                     <Form>
                
                            <Row>
                                <Col> 
                                <Form.Label style={{float:'left'}}>{this.props.totalProducts} product(s) founds</Form.Label>
                                </Col>
                                <Col>
                                    <Dropdown> 
                                            <Dropdown.Toggle className={classes.drDown}>
                                            Order By Price
                                            </Dropdown.Toggle>
                                        
                                            <Dropdown.Menu className={classes.item}>
                                            <Dropdown.Item href="#/action-1" className={classes.item}>All Prices</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className={classes.item}>Lowest to Highest</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className={classes.item}>Highest to Lowest</Dropdown.Item>
                                            </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                
                   </Form>
           </Container>
            
        );
    }
}


export default heading;