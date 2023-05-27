import Contact from '@/components/Contact'
import Download from '@/components/Download'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Question from '@/components/Question'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Download />
      <Question />
      <Contact />
      <Reviews />
      <Footer />
    </>
  )
}
