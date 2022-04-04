import React from 'react'

function About() {
    return (
        <div className='font-poppins flex justify-center mt-[40px] items-center'>
            <div className='p-4 shadow-md rounded-md'>
                <h2 className='text-center font-semibold text-xl my-[10px]'>Hr Meheraj</h2>
                <hr className='bg-pink-900 mb-2'/>
                <div className='flex justify-center' ><img  className='w-[80px] h-[80px] rounded-full border-2 border-pink-700 mb-2' src='https://i.ibb.co/WgwvrXJ/download.jpg'/></div>
                <div className='flex justify-around py-2'>
                <a className='text-pink-700 hover:bg-pink-900font-semibold m-b'  href='https://github.com/hr-meheraj/' target="_blank">Github Link</a><br/>
                <a  className='text-pink-700 hover:bg-pink-900font-semibold m-b' href='https://facebook.com/hr.meheraj.50' target="_blank">Facebook</a>
                </div>
                <h3 className='text-2xl font-semibold text-blue-700 py-4'>Comming Soon About Page...</h3> 
            </div>
        </div>
    )
}

export default About
