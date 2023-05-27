import { services } from '@/utils/constant'
import { Swiper, SwiperSlide } from 'swiper/react'

const Services: React.FC = () => {
  return (
    <>
      <div className='w-[95%] max-w-7xl mx-auto text-center relative mt-16'>
        <h3 className='text-[#2B4E8C] text-lg mb-[5px]'>Popular</h3>
        <h2 className='font-bold font-raleway text-[32px]'>Popular services</h2>
        <h3 className='text-[rgba(43,_78,_140,_0.5)] font-bold font-raleway text-[32px] relative sm:absolute right-0 top-[50%] lowercase'>
          10 options
        </h3>
      </div>
      <section className='overflow-hidden'>
        <Swiper
          spaceBetween={15}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1 },
            475: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          direction='horizontal'
          className='swiper-container w-full'
        >
          <div>
            {services.map((item, id) => (
              <SwiperSlide key={id}>
                <article>
                  <img
                    src={item.image}
                    alt={item.text}
                    className='w-[240px] h-[255px]'
                  />
                  <div className='text-center mt-2 text-[14px] text-[#484848]'>
                    <p className='capitalize mb-2.5'>{item.text}</p>
                    <p className='font-semibold'>+ {item.requests} requests</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </>
  )
}

export default Services
