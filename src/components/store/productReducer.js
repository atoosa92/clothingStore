
import * as actionType from './actionType';



const initialState=[]

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case actionType.listOfProducts:
            return [ ...action.products ];

        default:
            return state;    
            
    }

}



export default reducer;