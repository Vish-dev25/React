import React, {Component} from 'react';

class ButtonValueIncrement extends Component{
    constructor(props){
        super();
        this.state = {sum:0};
    }
    onClickHandle = (value) => {
        let {sum} = this.state;
        console.log(value)
        sum = sum + value;
        this.setState({sum});
        
    }
    render()
    {
        let {sum} = this.state;
        return(
            <>
                <div>Sum : {sum}</div>
                <button className='btn btn-primary  mr-2' onClick={()=> this.onClickHandle(10)}>10</button>
                <button className='btn btn-primary mr-2'onClick={()=> this.onClickHandle(20)}>20</button>
                <button className='btn btn-primary  mr-2'onClick={()=> this.onClickHandle(30)}>30</button>
                <button className='btn btn-primary  mr-2'onClick={()=> this.onClickHandle(40)}>40</button>
                <button className='btn btn-primary  'onClick={()=> this.onClickHandle(50)}>50</button>
            </>
        )
    }
}
export default ButtonValueIncrement