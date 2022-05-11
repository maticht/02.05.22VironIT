import './App.css';
import ButReq from './butReq'
import React from "react";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p className='Requests'>The New York Times</p>
                <ButReq />
            </header>
        </div>
    )
}

export default App;
