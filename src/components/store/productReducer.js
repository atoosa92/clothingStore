
import * as actionType from './actionType';



const initialState={
    products:[],
    productCount:0
}

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case actionType.listOfProducts:
            return {
                products:[ ...action.products],
                productCount:action.productCount
            } ;

        default:
            return state;    
            
    }

}



export default reducer;