import React, { Component } from 'react';
import Purchase from '../purchasedItems/purchasedItems';
import CheckoutHeader from '../purchasedItems/checkoutHeader';
import Button from 'react-bootstrap/Button';
import classes from './slidDrawer.module.css';


class SlidDrawer extends Component{
    state = {

        selectedItems:[
            {  
                 id:1,
                imgItem:'./img/T1.jpeg',
                titleItem:'Cat Tee Black T-Shirt',
                priceItem:10.99,
                sizeItem:'M',
                quantityItem:1
            },
            {   
                id:2,
                imgItem:'./img/T1.jpeg',
                titleItem:'Cat Tee Black T-Shirt',
                priceItem:10.99,
                sizeItem:'M',
                quantityItem:1
            }
            
            
            
        ]
    }
    render(){

       const selectedItemsToPurchase = this.state.selectedItems.map(item=>{
            return (
                <Purchase key={item.id} 
                img={item.imgItem}
                title={item.titleItem}
                price={item.priceItem}
                size={item.sizeItem}
                quantity={item.quantityItem}

                />
            )
       });
        return(
        
            <div className={[classes.slidDrawer,this.props.active ? classes.slidDrawerOpen : null ].join(" ")}>
                <Button className={classes.closeForm} onClick={this.props.onClose} >
                    <i className="fas fa-times"></i>
                </Button>
                <div className={classes.cartShopping}>
                    <CheckoutHeader/>
                    <div className={classes.shappingItemsContainer}>
                        {selectedItemsToPurchase}
                        
                        
                    </div>
                    
                    
                    
                </div>
                
            </div>
                    
        );
    }
}



export default SlidDrawer;