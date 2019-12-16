import React from 'react';
import classes from './purchaseItem.module.css';



const Purchase =(props) =>{
    
    
        return(
            <div>
                
                  
                  <div className={classes.purchaseForm}>
                        <div style={{float:'right',marginRight:'20px'}}>
                              <button className={classes.btnDelete}> 
                                    <i className="fas fa-times"></i>
                              </button>
                        </div>

                        <div className={classes.subPurchase}>
                            <img src={props.img} alt={props.title} className={classes.img} />
                            <div className={classes.textForm}>
                                <div style={{float:"left",width:"100%"}}>
                                    <p>{props.title}</p>
                                    <p className={classes.productDetail} >
                                        <span className={classes.productDetailLeft}>Price:</span>
                                        <span className={classes.productDetailRight}>${props.price}</span>
                                    </p>
                                    <p className={classes.productDetail} >
                                        <span className={classes.productDetailLeft}>Size:</span>
                                        <span className={classes.productDetailRight} >{props.size}</span>
                                    </p>
                                    <p className={classes.productDetail} >
                                        <span className={classes.productDetailLeft}>Quantity:</span>
                                        <span className={classes.productDetailRight} >
                                            <button className={classes.plusMinus}><i className="fas fa-minus-circle"></i></button>
                                            <span className={classes.productDetailQuantity}>{props.quantity}</span> 
                                            <button className={classes.plusMinus}><i className="fas fa-plus-circle"></i></button>
                                        </span>
                                    </p>
                                </div>
                              
                              
                            </div>
                           
                        </div>
                        
                        
                        
                  </div>
                  <hr/>
                 

                 <div className={classes.checkoutCart}>
                     <p>
                         <span style={{float:'left',marginLeft:"20px",marginTop:"20px"}}>SUBTOTAL</span>
                         <span style={{float:'right',marginRight:"20px",marginTop:"20px"}}>$80.70</span>
                     </p>
                     <button className={classes.checkoutBtn}>CHECKOUT</button>
                 </div>
                    
                
             </div>
        );
    
}

export default Purchase;