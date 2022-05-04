import './App.css';
import React from "react";
import News from "./News";

class ButReq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    }
    render() {
        return(
            <>
                <p className='Requests'>The New York Times</p>
                <div>
                    <button className='reqHistoryTitle' onClick={() => {
                        this.setState((state)=>({flag: !state.flag}))
                    }}>Show News</button>
                    {this.state.flag && <News setValue={
                        (type) => {
                            this.setState({
                                name: type
                            })
                        }
                    }/>}
                </div>
            </>
        )
    }
}

export default ButReq;