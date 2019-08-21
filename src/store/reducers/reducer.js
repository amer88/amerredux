import * as actionTypes from '../actions'
const initialState={
    counter:0
}
const reducer=(state=initialState,action)=>{

    switch(action.type){
        case  actionTypes.INCREMENT :
            return{
                ...state,
                counter:state.counter+1
            }
            case actionTypes.DECREMENT :
            return{
                ...state,
                counter:state.counter-1
            }
            case actionTypes.MULTIPLY:
            return{
                ...state,
                counter:state.counter*action.value
            }
            case actionTypes.DIVISION:
            return{
                ...state,
                counter:state.counter/action.value
            }
    }
    // if(action.type==='INCREMENT'){
    //     return {
    //         counter:state.counter+1
    //     }
    // }
    return state;
}
export default reducer;