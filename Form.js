import React, {Component} from 'react';
import Header from './Header';

class Form extends Component{
    constructor()
    {
        super();
        this.state = 
        {
            FullName:'',
            Address:'',
            Email:'',
            Password:''
        };
    }

    onChangeHandler =(e)=>
    {
        let {name, value} = e.target;
        console.log("Input box changed", name, value);
       
        if(name === "FullName")
        {
            this.setState({FullName: value})
        }
        if(name === "Address")
        {
            this.setState({Address: value})
        }
        if(name === "Email")
        {
            this.setState({Email: value})
        }
         if(name === "Password")
        {
            this.setState({Password: value})
        }
        
    }

    render()              //render() triggers when detects any change in functions.
    {
        let {FullName, Address, Email, Password} = this.state;
        return(
            <>
                
                <form className='form-group'>
                

                <div className='form-group'>
                    <h1>Fill Form</h1>
                    <Header fullName={FullName} address={Address} />
                    <label>Full Name</label>
                    <input type='text' name='FullName' value={FullName} placeholder='Enter FullName' className='form-control' onChange={this.onChangeHandler}/>
                </div> 
                

                <div className='form-group'>
                    <label>Address</label>
                    <input type='text' name='Address' value={Address} placeholder='Enter Address' className='form-control' onChange={this.onChangeHandler}/>
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' name='Email' value={Email} placeholder='Enter Email' className='form-control' onChange={this.onChangeHandler}/>
                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' name='Password' value={Password} placeholder='Enter Password' className='form-control' onChange={this.onChangeHandler}/>
                </div>


                <div className='form-group'>
                   <button className='btn btn-success'> Submit </button>
                </div>

                </form>
            </>
        )
    }
}
export default Form