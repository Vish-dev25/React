import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashBoard from './DashBoard';
import Clients from './Clients';
import Vendors from './Vendors';
import ClientDetails from './ClientDetails';

function Display2() {
    return (
        <>
            <div className='text-center text-light bg-dark'><h2>Routing</h2></div>
            <Router>
                <div className='navbar navbar-dark bg-light'>
                    <div className=''>
                        <li className='ml-5 btn btn-outline-primary'><Link to="/dashboard">DashBoard</Link></li>
                        <li className='ml-5 btn btn-outline-primary'><Link to="/clients">Clients</Link></li>
                        <li className='ml-5 btn btn-outline-primary'><Link to="/vendors">Vendors</Link></li>

                    </div>
                </div>

                <div className='text-center bg-light'>
                    <Routes>
                        <Route path="/dashboard" element={<DashBoard />} />
                        <Route path="/clients" element={<Clients />} />
                        <Route path="/vendors" element={<Vendors />} />
                        {/* <Route path="/clientdetails/:cId/:clientName" element={<ClientDetails />}/> */}
                    </Routes>
                </div>
            </Router>
        </>
    )
}
export default Display2