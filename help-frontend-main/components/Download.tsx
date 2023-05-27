const Download: React.FC = () => {
  return (
    <section className='w-[95%] max-w-7xl mx-auto mt-24 pl-16'>
      <div className='text-center relative'>
        <h3 className='text-[#2B4E8C] text-lg mb-[5px]'>Join us</h3>
        <h2 className='font-bold font-raleway text-[32px]'>Our app</h2>
      </div>
      <div className='grid lg:grid-cols-[2fr_1fr] gap-8 items-center justify-center mt-12'>
        <div className='relative flex justify-center items-center'>
          <img
            src='/images/iPhone-13.png'
            alt='iphone'
            className='w-[354px] h-[645px] z-10'
          />
          <div className='absolute h-[370px] w-[370px] rounded-full border border-gray-300'></div>
          <div className='absolute h-[500px] w-[500px] rounded-full border border-gray-300'></div>
          <div className='absolute h-[600px] w-[600px] rounded-full border border-gray-300'></div>
          <div className='absolute top-[15%] left-[15%]'>
            <img
              src='/images/small1.png'
              alt='small1'
              className='w-[55px] h-[55px]'
            />
          </div>
          <div className='absolute top-[30%] right-[15%]'>
            <img
              src='/images/small2.png'
              alt='small2'
              className='w-[55px] h-[55px]'
            />
          </div>
          <div className='absolute top-[50%] left-[20%]'>
            <img
              src='/images/small3.png'
              alt='small3'
              className='w-[55px] h-[55px]'
            />
          </div>
          <div className='absolute top-[70%] right-[20%]'>
            <img
              src='/images/small4.png'
              alt='small4'
              className='w-[55px] h-[55px]'
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <h2 className='font-bold font-raleway text-[64px]'>
            Download our App Now
          </h2>
          <p className='text-lg text-[rgba(0,_0,_0,_0.5)] font-medium'>
            Make your to-do list wherever you are with our mobile app.
          </p>
          <p className='text-lg text-[rgba(0,_0,_0,_0.5)] font-medium'>
            <span className='font-semibold'>Help</span> is an easy way to find
            qualified and reliable local Helpers for everything from assembling
            and installing furniture to moving and cleaning
          </p>
          <div className='flex gap-5 items-center'>
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
        </div>
      </div>
    </section>
  )
}

export default Download
