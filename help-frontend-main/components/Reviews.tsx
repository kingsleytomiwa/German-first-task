import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import StarRatings from 'react-star-ratings'

import { reviews } from '@/utils/constant'

const Reviews: React.FC = () => {
  SwiperCore.use([Pagination])
  return (
    <>
      <div className='w-[95%] max-w-7xl  mt-16 mx-auto text-center relative'>
        <h3 className='text-[#2B4E8C] text-lg mb-[5px]'>Reviews</h3>
        <h2 className='font-bold font-raleway text-[32px]'>
          Feedback from you
        </h2>
      </div>

      <section className='w-full mb-16 overflow-hidden'>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            620: { slidesPerView: 2 },
            1006: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className='swiper-container'
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <article className='rounded-[20px] shadow-[6.30598px_-1.57649px_77.2482px_1.57649px_rgba(0,_0,_0,_0.12)] flex flex-col items-center justify-center pt-6 px-10 h-[484px] mb-12 relative'>
                <div className='flex items-center justify-center mb-[6px]'>
                  <img
                    src={review.image}
                    alt={review.name}
                    className='w-[68] h-[68]'
                  />
                </div>
                <h3 className='font-bold text-center -mb-1 text-lg'>
                  {review.name}
                </h3>

                <div className='flex items-center justify-center mb-9'>
                  <StarRatings
                    rating={review.stars}
                    starDimension='20px'
                    starSpacing='1px'
                    starRatedColor='#FFE500'
                  />
                </div>
                <p className='text-[rgba(0,_0,_0,_0.7)] text-lg mb-20'>
                  {review.message}
                </p>
                <p className='font-semibold absolute bottom-7 right-10 text-lg'>
                  {review.date}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}

export default Reviews
