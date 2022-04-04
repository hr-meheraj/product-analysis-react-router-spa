import React from "react";
import { useFetch } from "../../hooks/useFetch";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ReviewCard from "./ReviewCard";
import {Link} from 'react-router-dom'
function ReviewsDemo() {
  const [data, setData, loading] = useFetch(
    "https://retoolapi.dev/xpCGKN/reviews?_limit=3"
  );
  return (
    <div className="my-16 w-11/12 max-w-[920px] mx-auto ">
      <h2 className="text-2xl font-poppins font-semibold text-center mx-4">
        {" "}
        Our Clients Some Testimonials
      </h2>
      <div className="grid gap-[15px] py-2  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loading && <LoadingSpinner />}
        {data.map((eachData) => (
          <ReviewCard key={eachData.id} data={eachData} />
        ))}
      </div>
      <div className='my-[35px] flex justify-center'>
     
      <Link to='/reviews' className="rounded-lg mx-[15px] border-2 border-pink-700 py-2 px-4 font-semibold hover:bg-pink-700 hover:text-white">
        View More Reviews
      </Link>
      </div>
    </div>
  );
}

export default ReviewsDemo;
