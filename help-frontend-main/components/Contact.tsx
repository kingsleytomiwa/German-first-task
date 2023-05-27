import { useRef } from 'react'
import { z } from 'zod'

import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

const Contact: React.FC = () => {
  type FormData = FieldValues & {
    msg: string
    name: string
    subject: string
  }

  const formRef = useRef<HTMLFormElement>(null)

  const { register, handleSubmit } = useForm()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const schema = z.coerce.string()
    if (!formRef.current) return
    if (
      !schema.parse(data.msg) ||
      !schema.parse(data.subject) ||
      !schema.parse(data.subject)
    ) {
      toast.error('Please provide all values')
    }
    let datas
    if (
      !process.env.NEXT_PUBLIC_PRIVATE_KEY ||
      !process.env.NEXT_PUBLIC_TEMPLATE_KEY ||
      !process.env.NEXT_PUBLIC_SERVICE_KEY
    ) {
      throw new Error('No env keys provided')
    }
    try {
      const resp = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY,
        formRef.current,
        process.env.NEXT_PUBLIC_PRIVATE_KEY
      )
      datas = resp.text
    } catch (error) {
      toast.error(datas)
      return
    }

    toast.success('Email Sent Successfully')
  }

  return (
    <section className='w-[95%] max-w-7xl mx-auto mt-16'>
      <div className='text-center relative mb-8'>
        <h3 className='text-[#2B4E8C] text-lg mb-[5px]'>Contacts</h3>
        <h2 className='font-bold font-raleway text-[32px]'>Contact us</h2>
      </div>
      <article className='grid md:grid-cols-2 items-center justify-center gap-16 w-[90%] max-w-4xl mx-auto rounded-[20px] shadow-2xl p-[50px]'>
        <div className='grid gap-4'>
          <div className='relative'>
            <img
              src='/images/contact.png'
              alt='contact'
              className='w-[400px] h-[345px] object-contain relative z-10'
            />
            <div className='bg-[#2B4E8C] w-[284px] h-[284px] absolute rounded-full bottom-0 left-[10%]'></div>
          </div>
          <div className='grid grid-cols-2 gap-7 mt-[30px]'>
            <div className='flex gap-2.5 font-semibold'>
              <img
                src='./images/call.svg'
                alt='call'
                className='w-[23px] h-[23px]'
              />
              <div>
                <p className='text-lg'>Call Us</p>
                <p className='text-[rgba(0,_0,_0,_0.5)] text-[15px]'>
                  +351-965-990-000
                </p>
              </div>
            </div>
            <div className='flex gap-2.5 font-semibold'>
              <img
                src='./images/at.svg'
                alt='at'
                className='w-[23px] h-[23px]'
              />
              <div>
                <p className='text-lg'>Our Email</p>
                <p className='text-[rgba(0,_0,_0,_0.5)] text-[15px]'>
                  @helpyou@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(() => onSubmit)}
          className='flex flex-col items-start justify-evenly w-full'
          ref={formRef}
        >
          <div className='w-full'>
            <div className='relative mb-6'>
              <img
                src='./images/profile.svg'
                alt='msg'
                className='pointer-events-none w-6 h-[27px] absolute top-1/2 transform -translate-y-1/2 left-[35px] text-[rgba(0,_0,_0,_0.5)]'
              />
              <input
                {...register('name', { required: true })}
                type='text'
                id='name'
                className='h-[70px] box-border outline-none mb-5 py-6 rounded-[20px] w-full resize-none shadow-[0px_1px_12px_rgba(0,_0,_0,_0.22)] bg-pry text-black font-medium pl-[74px] text-sm focus:ring-blue-500 focus:border-blue-500 block placeholder:text-lg placeholder:font-medium'
                placeholder='Your Name'
              />
            </div>
          </div>
          <div className='w-full'>
            <div className='relative mb-6'>
              <img
                src='./images/msg.svg'
                alt='msg'
                className='pointer-events-none w-6 h-[18px] absolute top-1/2 transform -translate-y-1/2 left-[35px] text-[rgba(0,_0,_0,_0.5)]'
              />
              <input
                {...register('subject', { required: true })}
                type='text'
                id='subject'
                className='h-[70px] box-border outline-none mb-5 py-6 rounded-[20px] w-full resize-none shadow-[0px_1px_12px_rgba(0,_0,_0,_0.22)] bg-pry text-black font-medium pl-[74px] text-sm focus:ring-blue-500 focus:border-blue-500 block placeholder:text-lg placeholder:font-medium'
                placeholder='Your Subject'
              />
            </div>
          </div>
          <div className='w-full'>
            <div className='relative mb-6'>
              <img
                src='./images/chat.svg'
                alt='chat'
                className='pointer-events-none w-6 h-[22px] absolute top-9 transform -translate-y-1/2 left-[35px] text-[rgba(0,_0,_0,_0.5)]'
              />
              <textarea
                {...register('msg', { required: true })}
                id='message'
                className='h-[190px] box-border outline-none mb-5 py-6 rounded-[20px] w-full resize-none shadow-[0px_1px_12px_rgba(0,_0,_0,_0.22)] bg-pry text-black font-medium pl-[74px] text-sm focus:ring-blue-500 focus:border-blue-500 block placeholder:text-lg placeholder:font-medium'
                placeholder='Your Message'
              />
            </div>
          </div>
          <button
            type='submit'
            className='trans bg-[#2B4E8C] text-white rounded-[20px] font-medium w-full hover:bg-[#2B4E8C]/70 text-lg px-4 py-4'
          >
            Send
          </button>
        </form>
      </article>
    </section>
  )
}

export default Contact
