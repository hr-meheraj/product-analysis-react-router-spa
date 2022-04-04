import React from 'react'

function ReviewCard({data}) {
    const {name, imgUrl, ratings, description} = data;
    return (
        <div className='mt-[15px] p-4 border-2 border-pink-600 rounded-md py-4'>
            <h3 className=' mx-[10px] text-xl font-semibold  text-center' style={{margin:"10px"}}>{name}</h3> 
            <div className='flex justify-center px-2'>
                <img src={imgUrl} className='w-[70px] h-[70px] rounded-[35px] border-2 border-pink-600'/>
            </div>
            <div className=' text-center mx-[5px]' style={{margin:"10px"}}> {ratings} </div>
            <p>{description}</p>
        </div>
    )
}

export default ReviewCard
