import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions'
class Counter extends Component {
    state = {
        counter: 0
    }
    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState(
                    (prevState) => { 
                        console.log(prevState)
                    return { counter: prevState.counter + 1 } 
                }
                )

                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'mul':
                this.setState((prevState) => { return { counter: prevState.counter * value } })
                break;
            case 'div':
                this.setState((prevState) => { return { counter: prevState.counter / value } })
                break;
        }
    }
    render() {
        return (
            <div>
            {/* <CounterOutput value={this.state.counter} /> */}
            <CounterOutput value={this.props.ctr} />
            <CounterControl label='Increment' clicked={this.props.onIncrementCounter} />
            <CounterControl label='Decrement' clicked={this.props.onDecrementCounter} />
            <CounterControl label='Multiply by 5' clicked={this.props.onMultiplyCounter} />
            <CounterControl label='Division over 3' clicked={this.props.onDivisionCounter} />
            <hr />
            <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
            <ul>
                {this.props.storedResult.map(strResult=>(
                    <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                ))}
            </ul>
            </div>
    );
    }
}

const mapStateToProps=(state)=>{
    return {
        ctr:state.ctr.counter,
        storedResult:state.str.results
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onIncrementCounter:()=>dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter:()=>dispatch({type:actionTypes.DECREMENT}),
        onMultiplyCounter:()=>dispatch({type:actionTypes.MULTIPLY,value:5}),
        onDivisionCounter:()=>dispatch({type:actionTypes.DIVISION,value:3}),
        onStoreResult:(result)=>dispatch({type:actionTypes.SHOWRESULT,result:result}),
        onDeleteResult:(id)=>dispatch({type:actionTypes.DELETE_RESULT,resultElId:id}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);