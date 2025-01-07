import React from 'react'
import image from '@/public/463708205_2748165622014184_4923978611576489869_n.jpg'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa';
function About() {
  return (
    <div className="container relative mx-auto md:mt-24 mt-16">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
        <div className="md:col-span-3"><div className="relative">
            <img src={image.src} className="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-[90%]" alt="" />
           </div>
           </div>

           <div className="md:col-span-7"><div className="lg:ms-8">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal text-[#05073c] font-semibold">Kila travel</h3>
            <p className="text-slate-400 max-w-xl mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat facere. Deleniti aut voluptatum non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat facere. Deleniti aut voluptatum non.
                </p>
                <Link className="py-2 gap-6 px-5 flex items-center w-[200px] tracking-wide align-middle duration-500 text-base text-center bg-[#EB662B] text-white rounded-md" href="/team">წაიკითხე მეტი <FaArrowRight /></Link></div></div>
        </div>
    </div>
  )
}

export default About