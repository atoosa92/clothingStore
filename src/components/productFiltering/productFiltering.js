import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classes from './productFiltering.module.css';

class productFiltering extends Component{
   state={
       sizeBox:[]
   }

  sizeHandeler = (id,isChecked)=>{


      var newArray = [ ...this.state.sizeBox.filter(item=> item!==id) ];
      if(isChecked){
          newArray.push(id);
      } 
      this.setState({
          sizeBox : newArray
      },()=>{
          this.props.onFilterChanged(newArray);
      });

    
  }


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
                                key={type._id}
                                label={type.sizes}
                                className={classes.lableSize}
                                onClick={(event)=>{this.sizeHandeler(type._id,event.target.checked)}}
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