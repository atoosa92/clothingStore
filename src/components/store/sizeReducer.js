
import * as actionType from './actionType';



const initialState=[]

const reducer = ( state = initialState, action ) => {
    switch(action.type){

        case actionType.listOfSizes:
            return [ ...action.sizes ];

        default:
            return state;    
            
    }

}



export default reducer;