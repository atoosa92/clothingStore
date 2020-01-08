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


export const getListOfSelectedItemsSuccess = (items)=>{
    return{
        type:actionType.listOfSelectedItems,
        items:items
    };
         
          
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


export const postListOfSelectedItems = (id)=>{
    console.log("idddddddddddddddd",{id});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
     return dispatch=>{
        api.post('shoppingCart',{id})
        .then(response=>{
            console.log('items loaded',response.data);
            dispatch(listOfSelectedItems());
        }).catch(err=>{
            console.log(err);
        })
     }
}


export const listOfSelectedItems = ()=>{
    return dispatch =>{
        api.get('items')
        .then(response =>{
            dispatch(getListOfSelectedItemsSuccess(response.data));
            console.log('itemsssssssss',response.data);
        }).catch(err=>{
            console.log(err);
        })
        
    }
}

export const updateQuantity =(quantity,id)=>{
     return dispatch=>{
         api.patch(`updateQuantity/${id}`,{quantity})
         .then(response=>{
             dispatch(listOfSelectedItems);
             console.log('newQuantity is sent',response.data);
         }).catch(err=>{
             console.log(err);
         })
     }
}