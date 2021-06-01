import './App.css';
import React, { useState } from 'react'

const default_name = "Boba Tea";

function App() {
    let [name, setData] = useState(default_name)
    function getData(val) {
        setData(val.target.value)
        console.warn(val.target.value)
    }
    return (
        <div className="change_name">
            <br></br>
            <h2>Bubble Tea Name 🥤:</h2>
            <h1>{name}</h1>
            <input class="input" type="text" autoComplete="off" placeholder="    Change Bubble Tea name here !" onChange={getData} />
        </div>
    );
}

export default App