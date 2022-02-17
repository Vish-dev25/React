import React, {Component} from 'react';

class CheckBox extends Component{
    constructor(){
        super();
        this.state = {trncheck: false};
    }
    onCheck=()=>{
        this.setState({trncheck : true});
        this.setState({trncheck: !trncheck})
    }
    render(){ 

        let {trncheck} = this.state;     
        return(
            <> 
                Training: <input type='checkbox' checked={trncheck}/>       
                <button type='button' classname='btn btn-primary' onClick={this.onCheck}> Check </button>
            </>
        )
    }

}
export default CheckBox