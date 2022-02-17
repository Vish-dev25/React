import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Vendors() {
    const VData = [{ id: 1, name: 'Pawan', city: 'Mumbai' },
    { id: 2, name: 'Mishri', city: 'Delhi' },
    { id: 3, name: 'Dipak', city: 'Noida' },
    { id: 4, name: 'Himesh', city: 'Chennai' },
    { id: 5, name: 'Sunil', city: 'Pune' },
    { id: 6, name: 'Lata', city: 'Nagpur' }
    ];

    const [venData, setvenData] = useState(VData);

    return (
        <>
            <h3 className='bg-secondary'>Vendors List</h3>

            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Vendor Name</th>
                        <th>City</th>
                    </tr>

                    { venData.map((item, idx) => {
                         return(
                            <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                        </tr>
                         )
                    })}
                   


                </tbody>
            </table>
        </>
    )
}
export default Vendors
