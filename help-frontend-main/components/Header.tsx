import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <header className='w-[95%] pl-20 max-w-7xl mx-auto grid grid-cols-[100px_auto] gap-16 mt-20'>
      <img src='/images/logo.svg' alt='logo' className='w-[121px] h-[49px]' />
      <div className='ml-20 lg:flex hidden items-start gap-10 tracking-widest text-lg'>
        <Link
          href='/'
          className={`trans relative ${router.pathname === '/' ? 'pb-3' : ''}`}
        >
          Home
          {router.pathname === '/' && (
            <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-teal-950'></span>
          )}
        </Link>
        <Link
          href='/#contact'
          className={`trans relative ${router.pathname === '/' ? 'pb-3' : ''}`}
        >
          Contact Us
          {router.pathname === '/contact' && (
            <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-teal-950'></span>
          )}
        </Link>
        <Link
          href='/#policy'
          className={`trans relative ${
            router.pathname === '#policy' ? 'pb-3' : ''
          }`}
        >
          Confidentiality Policy
          {router.pathname === '/policy' && (
            <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-teal-950'></span>
          )}
        </Link>
        <Link
          href='#about'
          className={`trans relative ${router.pathname === '/' ? 'pb-3' : ''}`}
        >
          About us
          {router.pathname === '/about' && (
            <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-teal-950'></span>
          )}
        </Link>
        <Link
          href='#blog'
          className={`trans relative ${router.pathname === '/' ? 'pb-3' : ''}`}
        >
          Blog
          {router.pathname === '/blog' && (
            <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-teal-950'></span>
          )}
        </Link>
      </div>
    </header>
  )
}

export default Header
