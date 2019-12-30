import api from '../../api/api';
import * as actionType from '../store/actionType';




export const loadProductSuccess =(results)=>{
    return{
        type:actionType.listOfProducts,
        products:results.products,
        productCount:results.productCount
    }
 
}

export const loadSizesSuccess =(sizes) =>{
    return{
        type:actionType.listOfSizes,
        sizes:sizes
    }
}


export const loadProducts =(sizeFilter=[])=>{
    return dispatch=>{
        let filter="";
        
        for(let i=0;i<sizeFilter.length;i++){
            filter+="sizeFilter="+sizeFilter[i]+"&";
        }
        api.get('product?'+filter)
        .then(response=>{
            dispatch(loadProductSuccess(response.data));
        
            console.log('ohhhhhhh',response.data);
        }).catch(error=>{
            
            console.log("------err",JSON.stringify(error));
        
        })
    }
}




export const loadSizes = ()=>{
    return dispatch=>{
        api.get('size')
        .then(response=>{
            console.log('sizes loaded',response);
            dispatch(loadSizesSuccess(response.data));
        }).catch(error=>{
            console.log(error);
        })
    }
}