import React, {Component} from 'react';

class OnChange extends Component{
    constructor(){
        super();
        this.state = {txt : "This is a default text"}
    }

    onChangeHandler = () => {
        this.setState({txt : "The text changed after clicking button."})
        console.log("text changed..")
    }
    onClearHandler = () => {
        this.setState({txt : ''})
        console.log("text cleared..")
    }


    render()
    {
        return(
            <>
                <h1>{this.state.txt}</h1>
                <button className='btn btn-info mr-3' onClick={this.onChangeHandler}>Change text data</button>
                <button className='btn btn-danger 'onClick={this.onClearHandler}>Clear</button>
            </>
        )
    }
}
export default OnChange