import Image from 'next/image'
import Maps from '../public/images/maps.png'


export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t  border-orange-300 pt-5">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-kabel pt-5">Have your own Vehicle? Thats great !</h2>
            <p className="text-xl font-kabel text-gray-400">Explore the outskirts of the town with your own ride..<br/>Beautiful nature accompanies you all the way till our farm!</p>
          </div>

          {/* Testimonials */}
          <div className=" mx-auto w-96 h-auto justify-center text-center">

            
            <div className="  h-full p-10 bg-slate-800 border-2 border-orange-300 " data-aos="fade-up">
              <div>
                <div className=" text-center ">
                <a href='https://maps.app.goo.gl/dgkbFeSpK5t1Tsaz8'><Image src={Maps} width={300} height={250} alt="Testimonial 01" className=' opacity-80 transition ease-in-out delay-150  hover:-translate-1 hover:scale-105 duration-300  items-center align-middle top-auto justify-center' /></a>
                
                </div>
              </div>
              <div className="text-lg font-kabel text-gray-300 grow pt-4 text-center">Located about 35 km away from Bengaluru, navigating here is simple with the help of Google maps. </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-orange-300">
                <div className='text-center font-kabel'>
                  <a href='https://maps.app.goo.gl/dgkbFeSpK5t1Tsaz8'><button className='text-gray-200 bg-gray-600 rounded-md px-2 text-xl hover:bg-slate-400 hover:text-slate-900' >
                     Locate Now
                  </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
