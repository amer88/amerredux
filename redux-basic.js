const redux=require('redux')
const createStore=redux.createStore;
const myStateInStore={
    counter:0
}
const rootReducer=(state=myStateInStore,action)=>{
if(action.type==='INC_COUNTER'){
    return {
        ...state,
        counter:state.counter+1
    };
}
    if(action.type==='ADD_COUNTER'){
        return {
            ...state,
            counter:state.counter+action.value
        };
        
}
return state;
}
const store=createStore(rootReducer);
console.log('[Before Dispatching]',store.getState())

store.subscribe(()=>{
    console.log('[Subscription]',store.getState())
})
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});
console.log('[After Dispatching]',store.getState())

