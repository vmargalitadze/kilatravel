import React from 'react'
import Image from 'next/image'
import HeroBg from '@/public/hero/bg.png'
import shape from '@/public/hero/shape.svg'
import shape2 from '@/public/hero/shape2.svg'
import f from  '@/public/hero/1.png'
import { FaArrowRight } from 'react-icons/fa';
import './join.css'
import Link from 'next/link'

function Galery() {
  return (
    <div className="layout-pb-xl layout-pt-xl">
        <div className="container relative mx-auto  md:mt-24 mt-16">

    <div className="cta -type-2">
      <div className="cta__bg">
        <img src="/hero/bg.png" alt="ds" className="bgimage" height={200} />
        <div className="cta__image">
          <img src="/hero/1.png" alt="f" />
          <img src="/hero/shape.svg" alt="f" />
          <img src="/hero/shape2.svg" alt="f" />
        </div>
      </div>
  
      <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch">
      
        <div className="flex-1 flex flex-col ml  p-6 lg:p-12">
          <h2 className="md:text-3xl gallery-text text-2xl md:leading-normal text_header leading-normal font-bold ">
         გალერეა
          </h2>
          <Link
  className="py-2 gap-6 px-5 flex items-center w-[200px] tracking-wide align-middle duration-500 text-center bg-[#EB662B] text-white rounded-md font-normal"
  href="/gallery"
>
  დაათვალიერე <FaArrowRight />
</Link>

        </div>
  
       
      </div>
    </div>
        </div>
  </div>
  
  )
}

export default Galery