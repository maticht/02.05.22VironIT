import './App.css';
import React from "react";
import News from "./News";
import {useState} from "react";


const ButReq = () => {
    const [flag,setFlag] = useState(false);
    return (
        <div>
            <button className='reqHistoryTitle' onClick={() => {
                setFlag(!flag)
            }}>Show News</button>
            {flag && <News/>}
        </div>
    )
}

export default ButReq;