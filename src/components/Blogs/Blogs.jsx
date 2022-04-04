import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
function Blogs() {
    const [data,setData,loading] = useFetch('https://retoolapi.dev/vX6Or7/qna');
    return (
        <div className='font-poppins w-11/12 mx-auto mx-w-[920px] my-[40px]'>
            <h2 className='text-2xl font-semibold text-center py-[20px]'>Welcome to Blog Page</h2> 
            {
                loading && <LoadingSpinner/>
            }
            {
                data.map(eachData => <Question key={eachData.key} data={eachData}/>)
            }
        </div>
    )
}

const Question = ({data}) => {
    const {question, answer} = data;
    return(
        <div className='p-4 shwdow-md rounded-md m-5'>
            <h2 className='mb-2 font-semibold text-xl font-raleway'><b>Question :</b>
            {question}</h2>
            <p className='mb-2'><b>Anwser:</b> {answer}</p>
        </div>

    )
}
export default Blogs
