import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Poppins } from 'next/font/google'
import About from './about'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: 'interior design website',
  description: 'built to view our beautiful products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className=''>
        <Navbar />
         {children}
      </body>

      <section className='sb:mt-0 mb:mt-[10vh] cb:mt-[15vh] db:mt-[22vh]
        eb:mt-[25vh] fb:mt-[30vh] gb:mt-[35vh] 
        hb:mt-[40vh] jb:mt-[45vh] kb:mt-[50vh] 
        nb:mt-[55vh] qb:mt-[60vh] md:mt-[50vh] rb:mt-0 sm:mt-[95vh]'>
        <About/>
      </section>

      <footer>
        <Footer />
      </footer>
      
    </html>
  )
}
