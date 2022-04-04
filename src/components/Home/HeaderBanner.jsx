import React from 'react'
import {Link} from 'react-router-dom'
function HeaderBanner() {
    return (
        <div className='w-11/12 mt-[25px] max-w-[920px] mx-auto grid md:grid-cols-2 grid-cols-1 '>
        <div className='p-2 flex flex-col justify-center items-center md:items-start'>
            <h1 className='font-["Raleway"]  mb-2 text-3xl md:text-4xl font-sembiold'>HIGH BRAND PRO WATCH</h1>
            <p className="font-poppins">Buy low performance watch with more than 5 years warrenty. Get it from here with free Delivery and Custmer support 24/7 for your brand.</p> 
            <Link to='/dashboard' className='w-[130px] mt-4 border border-pink-700 rounded-xl py-2 px-4 font-poppins font-semibold hover:bg-pink-700 hover:text-white transition-all'>Dashbaord</Link>
        </div>
        <div className='mx-auto p-2'>
             <img className='w-[300px]'src='https://i.ibb.co/FV6r5CC/Untitled-1280-720-px-620-720-px.png' />
        </div>

     </div>
    )
}

export default HeaderBanner
