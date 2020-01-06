import React from 'react';
import Product from '../product/sample';
import Col from 'react-bootstrap/Col';



const Products=(props)=>
    
        (
             <Col xs={12} sm={6} md={4} lg={3}> 
                
               
                    <Product 
                    id={props.idPro}
                    img={props.imgPro}
                    title={props.titlePro}
                    price={props.pricePro}
                    selectedItem={props.clickedItem}
                    
                    />
             </Col>
        );
    



export default Products;