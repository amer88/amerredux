import * as actionTypes from '../actions'
const initialState={
    results:[]
}
const genoutput=(state=initialState,action)=>{
    if (action.type===actionTypes.SHOWRESULT){
        return {
            ...state,
            results:state.results.concat({id:new Date(),value:action.result})
        }
    }
    else if(action.type===actionTypes.DELETE_RESULT){
        const updatedArray=state.results.filter(result=>result.id!==action.resultElId);
        return {...state,
            results:updatedArray
        }
    }
return state;
}
export default genoutput;