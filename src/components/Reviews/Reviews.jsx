import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import ReviewCard from '../Home/ReviewCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function Reviews() {
    const [data,setData,loading] = useFetch('https://retoolapi.dev/xpCGKN/reviews');
    return (
        <div className='w-11/12 mx-w-[920px] mx-auto my-[35px]'>
            {
                loading && <LoadingSpinner/>
            }
            <h2 className='font-raleway text-2xl text-center font-semibold my-[30px]'>Our Clients  All Reviews </h2>
            <div className='grid gap-[15px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-2 '>
                {
                    data.map(eachData => <ReviewCard key={eachData.id} data={eachData}/>)
                }
            </div>
        </div>
    )
}

export default Reviews
