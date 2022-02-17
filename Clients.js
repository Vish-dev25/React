import React, {useState} from 'react'
import {Link} from 'react-router-dom';

function  Clients()
{   
    const CData = [{cId:1, clientName:'PSquare Pvt Ltd'},
                    {cId:2, clientName:'LSquare Pvt Ltd'},
                    {cId:3, clientName:'TSquare Pvt Ltd'},
                    {cId:4, clientName:'QSquare Pvt Ltd'}];

    const [clData, setclData] = useState(CData);
   
    return(
        <>
            <h3 className='bg-secondary'>Clients List</h3>

            <table className='table'>
                <tbody>
                    {clData.map((item, idx) => {
                        return(

                            <tr key={idx}>
                                <td>{item.cId}</td>
                                <td>{item.clientName}</td>

                                <td>{<Link to={'/clientdetails/'+ item.cId +  "/" + item.clientName}>
                                    <button type='button' className='btn btn-info'> Select  </button>
                                    </Link>}
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default Clients
