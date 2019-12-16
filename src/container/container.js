import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from '../components/products/products';
import Container from 'react-bootstrap/Container';
import * as ProductListActions from '../components/store/action';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from '../components/heading/heading';
import ProductFiltering from '../components/productFiltering/productFiltering';
import ToggleButton from '../components/slidDrawer/toggleButton/toggleButton';
import SlidDrawer from '../components/slidDrawer/slideDrawer';




class ProductBuilder extends Component {

    state = {

        open:false
    }

    componentDidMount(){
        console.log("didmount----------->",this.props);
        this.props.onInitProducts();
        this.props.onInitSizes();
    }

    SlidDrawerIsOpen=()=>{
        this.setState({open:!this.state.open});
    }


    render() {
        
        return (
            <>
            <SlidDrawer active={this.state.open} onClose={this.SlidDrawerIsOpen}/>
            <Container>
                <Row>
                   <ToggleButton  clicked={this.SlidDrawerIsOpen} />
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                         
                          <ProductFiltering sizes={this.props.sizes}/>
                    </Col>
                
                    <Col xs={12} md={10}> 
                         
                           <Row>
                           <Heading/>
                           {this.props.products.map(item=>(
                                            <Products
                                            key={item.id}
                                            idPro={item.id}
                                            imgPro={item.img}
                                            titlePro={item.title}
                                            pricePro={item.price}
                                            
                                            />
                                        ))}
                                        
                            </Row> 
                                
                                
                            

                    </Col>
                   
                 </Row> 
            </Container>
            </>
        );
    }
}


const mapStateToProps = (state)=>{
    return{
        products:state.products,
        sizes:state.sizes
    };
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onInitProducts:()=>dispatch(ProductListActions.loadProducts()),
        onInitSizes:()=>dispatch(ProductListActions.loadSizes())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductBuilder);

