import api from '../../api/api';
import * as actionType from '../store/actionType';




export const loadProductSuccess =(products)=>{
    return{
        type:actionType.listOfProducts,
        products:products
    }
 
}

export const loadSizesSuccess =(sizes) =>{
    return{
        type:actionType.listOfSizes,
        sizes:sizes
    }
}


export const loadProducts =()=>{
    
    return dispatch=>{
        api.get('products')
        .then(response=>{
            console.log("products loaded", response);
            dispatch(loadProductSuccess(response.data.data.products));
        }).catch(error=>{
            
            console.log(error);
        
        })
    }
}




export const loadSizes = ()=>{
    return dispatch=>{
        api.get('sizes')
        .then(response=>{
            console.log('sizes loaded',response);
            dispatch(loadSizesSuccess(response.data.data.sizes));
        }).catch(error=>{
            console.log(error);
        })
    }
}