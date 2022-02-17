import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Display()
{
    return(
        <>
            <h4>Routing</h4>
            <BrowserRouter>
                <ul>
                    <li className='mr-3'><Link to = "/home">Home</Link></li>
                    <li className='mr-3'><Link to = "/service">Service</Link></li>
                    <li className='mr-3'><Link to = "/about">AboutUs</Link></li>
                    <li className='mr-3'><Link to = "/contact">ContactUs</Link></li>
                </ul>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/contact" element={<ContactUs/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Display

const Home = ()=> {return <h2>This is my Home Page.</h2>}
const Service = ()=> {return <h2>These are our Services.</h2>}
const AboutUs = ()=> {return <h2>Read About Us</h2>}
const ContactUs = ()=> {return <h2>This is our Contact Page</h2>}