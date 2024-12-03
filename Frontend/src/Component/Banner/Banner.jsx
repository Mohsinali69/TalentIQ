import { FaArrowRight } from "react-icons/fa"

const Banner = () => {
  return (
    <div>
      <section className='md:flex items-center justify-evenly pt-20'>
      <div className='w-full md:w-1/2 md:ml-24'>
        <div className='text-4xl font-semibold'>
          <h1>
            Get The <span className='text-blue-700'>Right Job</span>
          </h1>
          <h1>You Deserve</h1>
        </div>
        <p className='w-full md:w-4/6 mt-5 text-xl text-gray-500'>
          Each Month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>

        <p className='mt-3'>
          Popular Searches: <span className='underline'>Content Writer</span> ,{' '}
          <span className='underline'>Finance</span> ,{' '}
          <span className='underline'>Human Resource</span> ,{' '}
          <span className='underline'>Management</span>
        </p>

        <div className="mt-5">
          <button className='btn btn-active btn-primary'><span className="mb-1">Primary</span> <FaArrowRight />
          </button>
        </div>
      </div>
      <div>
        <img
          className='w-[600px] h-[350px]'
          src='https://smarttrends28742402.wordpress.com/wp-content/uploads/2020/03/recruitment-940x529-1.jpg?w=940'
          alt=''
        />
      </div>
    </section>
    </div>
  )
}

export default Banner
