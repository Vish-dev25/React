import React, {Component} from 'react';

class OnClick extends Component{
    constructor(props)
    {
        super();
        this.state = {Counter: 0};
    }
    onCounter =() =>{
        let {Counter} = this.state;
        Counter++;
        this.setState({Counter})
    }
    render()
    {
        let {Counter} = this.state;
        console.log("incremented..");

        return(
            <>
                <h1>Counter</h1>
                Counter : {this.state.Counter} <br/>
                <button className='btn btn-info' onClick={this.onCounter}> Counter </button>
            </>
        )
    }
}
export default OnClick