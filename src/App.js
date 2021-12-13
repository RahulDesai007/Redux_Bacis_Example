import React from 'react'
import "./App.css"
import {useSelector, useDispatch} from "react-redux"
import { incNumber, decNumber } from "./actions/index"

const App = () => {
  const myState = useSelector(state => state.changeTheNumber); //to map state values
  const dispatch = useDispatch() //to call the action function in actions
  return (
    <>
    <div className="App-header">
      <h1>Increment/Decrement counter</h1>
      <h4>using react and redux</h4>

      <div className="quantity">
        <a  title="Decrement"><button className="quantity_minus" onClick={() => dispatch(decNumber()) }> - </button></a>
        <input name="quantity" type="text" className="quantity_input" value={myState}/>
        <a  title="Decrement"><button className="quantity_plus" onClick={() => dispatch(incNumber()) }> + </button></a>
      </div>
    </div>
    </>
  )
}

export default App
