import logo from '../../public/images/logo.png'
import Image from 'next/image'
import Gan from '../../public/images/ganesh.png'
export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-5">
        <div className="flex items-center justify-center h-20 py-5" >
          {/* Site branding */}
          <div data-aos="fade-in">
         <Image src={logo} width={400} height={300} className='justify-center' alt='hello'/>
         
          {/* Desktop navigation */}
          </div>
          

        

        </div>
        <div className="flex items-center justify-center h-20 pt-10 " data-aos="fade-in">
          <Image src={Gan} width={100} height={100} className='justify-center' alt='hello'/>
          </div>
        
      </div>
    </header>
  )
}
