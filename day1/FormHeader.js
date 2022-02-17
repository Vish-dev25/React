import React, {Component} from 'react';

class FormHeader extends Component{
    constructor(props){
        super();

    }

    render()
    {
        let { fullName, address } = this.props;
        return(
            <>
                <h2>{fullName.length ? fullName : 'Please enter full name.'}</h2>
                <h2>{address.length ? address : 'Please enter address'}</h2>
            </>
        )
    }
}
export default FormHeader
