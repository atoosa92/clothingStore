import React, { Component } from 'react';
import ToggleButton from '../components/slidDrawer/toggleButton/toggleButton';
import SlidDrawer from '../components/slidDrawer/slideDrawer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





class ButtonDemo extends Component {


    state={
        open:false
    }


    SlidDrawerIsOpen=()=>{
        this.setState({open:!this.state.open});
    }

     render(){
         return(
             <>

             <SlidDrawer active={this.state.open} onClose={this.SlidDrawerIsOpen}/>
                
             
             <Container>
                 <Row>
                     <Col>
                            <ToggleButton  clicked={this.SlidDrawerIsOpen} />
                            
                     </Col>
 
                 </Row>
             </Container>
             </>
             
            

                 
             
         );
     }

}
export default ButtonDemo;