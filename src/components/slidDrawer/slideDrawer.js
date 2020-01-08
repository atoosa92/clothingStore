import React from 'react';
import Purchase from '../purchasedItems/purchasedItems';
import CheckoutHeader from '../purchasedItems/checkoutHeader';
import Button from 'react-bootstrap/Button';
import classes from './slidDrawer.module.css';


const SlidDrawer =(props)=>{

        const selectedItemsToPurchase = props.listOfItems.map(item=>{
             return (
                 <Purchase
                 key={item._id} 
                 id={item._id}
                 img={item.img}
                 title={item.title}
                 price={item.price}
                 quantity={item.quantity}
 
                 />
             )
        });
         return(
         
             <div className={[classes.slidDrawer,props.active ? classes.slidDrawerOpen : null ].join(" ")}>
                 <Button className={classes.closeForm} onClick={props.onClose} >
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


   /* state = {

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
    */
   




export default SlidDrawer;