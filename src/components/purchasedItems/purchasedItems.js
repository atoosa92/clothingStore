import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as ProductListActions from '../store/action';
import classes from './purchaseItem.module.css';



class Purchase extends Component{
    
        state = {
            newQuantity:1
        }

        componentDidUpdate(){
        }

        AddQuantity =()=>{ 

        let quan = this.state.newQuantity;
            quan +=1;
            this.setState({newQuantity:quan},()=>{
                this.props.onUpdateQuantity(this.state.newQuantity,this.props.id);
                
            });     
            
        }
        subtractQuantity =()=>{

            let quan = this.state.newQuantity;
            quan -=1;
            this.setState({newQuantity:quan});
            this.props.onUpdateQuantity(this.state.newQuantity,this.props.id);
        }
    
        render(){
        

            return(
                <div>
                    
                    
                    <div className={classes.purchaseForm}>
                            <div style={{float:'right',marginRight:'20px'}}>
                                <button className={classes.btnDelete}> 
                                        <i className="fas fa-times"></i>
                                </button>
                            </div>

                            <div className={classes.subPurchase}>
                                <img src={this.props.img} alt={this.props.title} className={classes.img} />
                                <div className={classes.textForm}>
                                    <div style={{float:"left",width:"100%"}}>
                                        <p>{this.props.title}</p>
                                        <p className={classes.productDetail} >
                                            <span className={classes.productDetailLeft}>Price:</span>
                                            <span className={classes.productDetailRight}>${this.props.price}</span>
                                        </p>
                                        <p className={classes.productDetail} >
                                            <span className={classes.productDetailLeft}>Size:</span>
                                            <span className={classes.productDetailRight} >X</span>
                                        </p>
                                        <p className={classes.productDetail} >
                                            <span className={classes.productDetailLeft}>Quantity:</span>
                                            <span className={classes.productDetailRight} >
                                                <button className={classes.plusMinus} onClick={this.subtractQuantity}><i className="fas fa-minus-circle"></i></button>
                                                <span className={classes.productDetailQuantity}>{this.state.newQuantity}</span> 
                                                <button className={classes.plusMinus} onClick={this.AddQuantity}><i className="fas fa-plus-circle"></i></button>
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
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onUpdateQuantity :(quantity,id)=>dispatch(ProductListActions.updateQuantity(quantity,id))
    }
}

export default connect(null,mapDispatchToProps)(Purchase);