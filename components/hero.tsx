

import Popup from './popup';


export default function Hero() {

  return (
   
    <section>
     

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative pt-5">

        {/* Illustration behind hero content */}
       

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="flex justify-items-center">
            
            
            <div className=" mx-auto text-center pb-12 md:pb-16  justify-center pt-10" data-aos="fade-up" >
           
           <h1 className="h1 mb-4 font-sam text-10xl pt-5" >Opening Cermony
           
           </h1>

          
          
           <p className=" text-2xl text-orange-300 font-sam  mb-8 font-light py-5 px-5 " data-aos="fade-left" data-aos-delay="200">29th October 2023</p>
           

           <Popup />
         </div></div>
          

         

        </div>

      </div>
    </section>
  )
}
