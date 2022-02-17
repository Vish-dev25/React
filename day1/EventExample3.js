import React, { useState } from 'react';

function Example3()
{
    const [state, setState] = useState("");

    const KeyPressHandler = (event) =>
    {
        setState(event.key)
    }
    const KeyUpHandler = (event) =>
    {
        setState(event.key)
    }
    const KeyDownHandler = (event) =>
    {
        setState(event.key)
    }


    return (
        <>
            <h2>Hi React!</h2>
            <p>Key pressed is : <h3>{state}</h3></p>
            <p>Key Up is : <h3>{state}</h3></p>
            <p>Key Down is : <h3>{state}</h3></p>

            <div className='form-group'>
                    <label>Full Name</label>
                    <input type='text' name='fullname' className='form-control' onKeyPress={(e1) =>KeyPressHandler(e1)} onKeyUp={(e2) =>KeyUpHandler(e2)} onKeyDown={(e3) =>KeyDownHandler(e3)}/>
                </div>
                
        </>
    )

}

export default Example3

//onKeyUp={this.onKeyUpHandler} 
// onKeyDown={this.onKeyDownHandler} 
// onKeyPress={this.onKeyUpHandler}

// class Example3 extends Component {
   
//     ChangeHandler = (e) =>
//     {
//         console.log(e.target.value)
//         console.log(e.key)
//         console.log(e.keyCode)
//     }
//     onKeyUpHandler = (e) =>
//     {
//         console.log("KeyUpHandler", e.key)
//     }
//     onKeyDownHandler = (e) =>
//     {
//         console.log("KeyDownHandler", e.key)
//     }
//     onKeyPressHandler = (e) =>
//     {
//         console.log("KeyPressHandler", e.key)
//     }



