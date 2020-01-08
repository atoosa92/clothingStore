import * as actionType from './actionType';


const initialState = [];

const reducer =(state = initialState, action)=>{
    switch(action.type){
        case actionType.listOfSelectedItems:
            return [
                ...action.items 
            ];
        default:
            return state; 
    }

}



export default reducer;
