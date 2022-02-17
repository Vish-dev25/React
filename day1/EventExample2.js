import React, { Component } from 'react';


class Example2 extends Component {
    constructor(props) {
        super();
        this.state = {
            fullname: '',
            address: '',
            mobile: ''
        };
    }

    SubmitHandler = (event) => {
        event.preventDefault();             //use to prevent the browser from executing the default action of selected element.
        console.log("Form Submitted..")
    }

    render() {

        return (
            <>
                <form onSubmit={this.SubmitHandler}>
                    <div className='form-group'>
                        <label>Full Name</label>
                        <input type='text' name='fullname' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Address</label>
                        <input type='text' name='address' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Phone</label>
                        <input type='tel' name='address' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}
export default Example2