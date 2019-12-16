import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classes from './productFiltering.module.css';

class productFiltering extends Component{

    render(){
        return(
            <>
           { console.log('okkkkk',this.props.sizes) }
            <Form className={classes.filteringFrame}>

                <Form.Label className={classes.lable}>
                   Sizes:
               </Form.Label>
              
                    <div> 
                        <Row>
                            <Col sm>
                               {this.props.sizes.map((type) => (
                                <Form.Check 
                                key={type.id}
                                label={type.val}
                                className={classes.lableSize}
                                />
                               ))}
                            </Col>
                        </Row>
                    
                      
                    </div>
            
          </Form>
          </>
        );
    }
}


export default productFiltering;