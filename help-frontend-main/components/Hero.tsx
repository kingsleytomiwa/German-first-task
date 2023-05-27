import { FaStar } from 'react-icons/fa'

const Hero: React.FC = () => {
  return (
    <section className='w-[95%] px-20 max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] items-center gap-16 mt-20'>
      <article className='flex flex-col gap-2.5'>
        <h2 className='font-bold font-raleway text-[64px]'>
          Revolutionizing Everyday Work
        </h2>
        <p className='text-lg font-medium mb-[20px]'>
          Everyday work is important, but it's also time consuming. We can help.
        </p>
        <div className='flex flex-col xs:flex-row gap-5 items-center mb-2.5'>
          <img
            src='/images/i-store.png'
            alt='i-store'
            className='w-[186px] h-[58px]'
          />
          <img
            src='/images/playstore.png'
            alt='i-store'
            className='w-[186px] h-[58px]'
          />
        </div>
        <div className='flex items-center gap-2'>
          <h2 className='font-semibold text-[43px]'>4.8</h2>
          <div>
            <span className='text-[#FFE600]'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p className='text-[rgba(0,_0,_0,_0.5)] text-[14px]'>
              990+ Reviews
            </p>
          </div>
        </div>
      </article>
      <article className='grid md:grid-cols-2 gap-5'>
        <div className='grid'>
          <div className='bg-[#2B4E8C] text-white text-[32px] font-bold font-raleway w-60 h-44 rounded-[20px] flex flex-col gap-2 items-center justify-self-end justify-center'>
            <h3>+1500</h3>
            <h3>Helpers</h3>
          </div>
          <img
            src='/images/reschedule.png'
            alt='reschedule'
            className='w-[370px] h-[200px]'
          />
        </div>
        <div className='w-[365px] h-483px]'>
          <img src='/images/grass.png' alt='grass' />
        </div>
      </article>
    </section>
  )
}

export default Hero
