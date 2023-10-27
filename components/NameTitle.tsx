import React from 'react'
import Top from '../public/images/top.png'
import Image from 'next/image'
import Bottom from '../public/images/bottom.png'
const NameTitle = (props) => {

  
  return (
    <div>
      <div className=" text-2xl text-gray-300 font-serif font-light py-0 px-0 items-center align-middle justify-center" data-aos="fade-right" data-aos-delay="200">
   <h2>To</h2>
      </div>
      <div data-aos="fade-left">
      <Image src={Top} width={450} height={10} alt="" />
      </div>
      

    <div className=" text-4xl text-gray-300 font-serif mb-8 font-light py-0 px-0 items-center align-middle justify-center" data-aos="fade-right" data-aos-delay="200">
  
  {props.name}
    </div>
    <div data-aos="fade-right">
      <Image src={Bottom} width={450} height={10} alt=""/>
    </div>
    </div>
   
  )
}

export default NameTitle
