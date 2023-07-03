
import React from 'react'
import { connect } from 'react-redux'
import {increaseAction,decreaseAction} from './CountAction'

function Count(props) {
  return (
    <div>Count: {props.count}<br/>
    Name:{props.Name}<br/>
    <button onClick={props.increase}>Increase</button><br/>
    <button onClick={props.decrease}>decrease</button>
    </div>
  )
}

const mapStateToProps =state =>{
    return{
        count:state.count,
        Name:state.Name
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        increase:()=>dispatch(increaseAction()),
        decrease:()=>dispatch(decreaseAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Count);