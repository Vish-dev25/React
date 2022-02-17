import React from 'react';
import {useParams} from 'react-router-dom';

function ClientDetails()
{
    const {cId, clientName} = useParams();
    return(
        <>
            <h3><u>Selected Client details</u></h3><br/>
            <h4>Id: <b>{cId}</b> <br/> 
            Client Name : <b>{clientName}</b></h4>
        </>
    )
}
export default ClientDetails