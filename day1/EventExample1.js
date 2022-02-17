import React, {Component} from 'react';
// import FormHeader from './FormHeader';

class Example1 extends Component{
    constructor(props)
    {
        super();
        this.state = {
            fullname :'',
            address:'',
            InputBoxClass:''
        };
    }

    FocusHandler=(event) => 
    {
        // event.target.style.backgroundColor = '';
        this.setState({InputBoxClass: 'bg-success text-white'})
    }

    BlurHandler = (event) => 
    {
        // event.target.style.backgroundColor = 'red';
        this.setState({InputBoxClass: 'bg-success text-white'})
    }
    render()
    { 
        let {InputBoxClass} = this.state;
        return(
            <>
                <div className='form-group'>
                    <label>Full Name</label>
                    <input type='text' name='fullname' onFocus={this.FocusHandler} onBlur={this.BlurHandler} className={'form-control' + InputBoxClass} />
                </div>
                <div className='form-group'>
                    <label>Address</label>
                    <input type='text' name='address' onFocus={this.FocusHandler} onBlur={this.BlurHandler} className={'form-control' + InputBoxClass} />
                </div>
                <div className='form-group'>
                    <button className='btn btn-success'>Submit</button>
                </div>
            </>
        )
    }
}
export default Example1