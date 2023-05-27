import { faqs } from '@/utils/constant'
import SingleQuestion from './SingleQuestion'

const Question: React.FC = () => {
  return (
    <section className='w-[95%] max-w-7xl mx-auto mt-16'>
      <div className='text-center relative'>
        <h3 className='text-[#2B4E8C] text-lg mb-[5px]'>Questions</h3>
        <h2 className='font-bold font-raleway text-[32px]'>
          Frequently asked questions
        </h2>
      </div>
      <article className='mt-20 grid sm:grid-cols-2 gap-2 sm:gap-6 items-center justify-center w-[90%] max-w-4xl mx-auto'>
        {faqs.map((faq, index) => {
          return <SingleQuestion key={index} {...faq} />
        })}
      </article>
    </section>
  )
}

export default Question
