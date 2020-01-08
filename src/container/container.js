import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from '../components/products/products';
import Container from 'react-bootstrap/Container';
import * as ProductListActions from '../components/store/action';
import {baseUrl} from '../config/config';
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
        this.props.onListOfSelectedItems();
        
    }

    SlidDrawerIsOpen=()=>{
        this.setState({open:!this.state.open});
    }
    
    selectedProduct=(id)=>{
        this.props.onSelectedProduct(id);
    }
    render() {
        console.log("products in container ",this.props.products);
         const itemsss=this.props.items;
        return (
            <>
            <p>{console.log('finallllllly',itemsss)}</p>
            <SlidDrawer active={this.state.open} onClose={this.SlidDrawerIsOpen} listOfItems={this.props.items}/>
            <Container>
                <Row>
                   <ToggleButton  clicked={this.SlidDrawerIsOpen} />
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                         
                          <ProductFiltering onFilterChanged={(sizeList)=>{this.props.onInitProducts(sizeList)}} sizes={this.props.sizes} />
                    </Col>
                
                    <Col xs={12} md={10}> 
                         
                           <Row>
                           <Heading totalProducts={this.props.productCount}/>
                           {this.props.products.map(item=>(
                                            <Products
                                            key={item._id}
                                            idPro={item._id}
                                            imgPro={baseUrl+item.img}
                                            titlePro={item.title}
                                            pricePro={item.price}
                                            clickedItem={this.selectedProduct}
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
        products:state.products.products,
        productCount:state.products.productCount,
        sizes:state.sizes,
        items:state.items
        
        
    };
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onInitProducts:(sizeList)=>dispatch(ProductListActions.loadProducts(sizeList)),
        onInitSizes:()=>dispatch(ProductListActions.loadSizes()),
        onSelectedProduct:(id)=>dispatch(ProductListActions.postListOfSelectedItems(id)),
        onListOfSelectedItems:()=>dispatch(ProductListActions.listOfSelectedItems())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductBuilder);

