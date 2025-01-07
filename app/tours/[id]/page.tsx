
import RightSide from '@/components/rightSide/RightSide';
import { getTourDetails } from '@/utils/actions';
import Link from 'next/link';
import React from 'react'

export default async function DetailPage({ params }: { params: { id: string } }) {
  
    const { id } = await params;
    const tour = await getTourDetails(id);

  
  
  
  return (
   <>
   <section  style={{
    backgroundImage: `url(${tour.images[4]})`,
  }} className={`relative table w-full items-center py-36  bg-top bg-no-repeat bg-cover`}>
    <div className="absolute inset-0 bg-gradient-to-b from-slate-800/60 via-slate-800/80 to-slate-800"></div>
    <div className="container  relative">
                <div className="grid grid-cols-1    text-center ">
                    <h3 className="text-5xl leading-10 tracking-[20px] font-semibold text-white"> რომი </h3>
                </div>
            </div>
            
   </section>
   <div className="relative md:py-24 py-16">
    <div className="container">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div className="lg:col-span-9 md:col-span-7">
          <div className="grid grid-cols-12 gap-4">
          <div className="md:col-span-8 col-span-7">
                                <div className="group relative overflow-hidden rounded  dark:shadow-gray-800">
                                    <img src={tour.images[0]} className="w-full rounded-3xl lg:h-80 md:h-60 h-60 object-cover" alt="" />
                                    <div className="absolute inset-0 "></div>
                                   
                                </div>
                            </div>
                            <div className="md:col-span-4 col-span-5">
                                <div className="group relative overflow-hidden rounded  dark:shadow-gray-800">
                                    <img src={tour.images[1]} className="w-full rounded-3xl lg:h-80 md:h-44 h-48 object-cover" alt="" />
                                    <div className="absolute inset-0 "></div>
                                    
                                </div>
                            </div>
                            <div className="md:col-span-4 col-span-5">
                                <div className="group relative overflow-hidden rounded  dark:shadow-gray-800">
                                    <img src={tour.images[2]} className="w-full rounded-3xl lg:h-80 md:h-44 h-48 object-cover" alt="" />
                                    <div className="absolute inset-0 "></div>
                                   
                                </div>
                            </div>

                            <div className="md:col-span-8 col-span-7">
                                <div className="group relative overflow-hidden rounded  dark:shadow-gray-800">
                                    <img src={tour.images[3]} className="w-full rounded-3xl lg:h-80 md:h-44 h-48 object-cover" alt="" />
                                    <div className="absolute inset-0 "></div>
                                   
                                </div>
                            </div>
          </div>

          <h5 className="text-2xl font-semibold mt-5">{tour.title}</h5>
          <p className="flex items-center text-slate-400 font-medium mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin size-4 me-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> {tour.location}  </p>
          <ul className="list-none">
                            <li className="inline-flex items-center me-5 mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EB662B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock size-6 stroke-[1.5] text-red-500"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>

                                <div className="ms-3">
                                    <p className="font-bold">ხანგრძლივობა:</p>
                                    <span className="text-slate-400 font-medium text-sm"> {tour.duration} დღე</span>
                                </div>
                            </li>


                            <li className="inline-flex items-center me-5 mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EB662B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users size-6 stroke-[1.5] text-red-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>

                                <div className="ms-3">
                                    <p className="font-bold">რაოდენობა:</p>
                                    <span className="text-slate-400 font-medium text-sm"> {tour.maxGuests} ადამიანი </span>
                                </div>
                            </li>
                            <li className="inline-flex items-center me-5 mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EB662B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity size-6 stroke-[1.5] text-red-500"><path d="M19 3h-1V1a1 1 0 1 0-2 0v2H8V1a1 1 0 1 0-2 0v2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM5 5h1v1a1 1 0 1 0 2 0V5h8v1a1 1 0 1 0 2 0V5h1a1 1 0 0 1 1 1v2H4V6a1 1 0 0 1 1-1zm14 15H5a1 1 0 0 1-1-1V10h16v9a1 1 0 0 1-1 1z"/>
                                <path d="M8 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H8zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2zM8 16a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H8zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2z"/></svg>

                                <div className="ms-3">
                                    <p className="font-bold">თარიღი:</p>
                                    <span className="text-slate-400 font-medium text-sm"> {tour.startDate} - {tour.endDate} მდე </span>
                                </div>
                            </li>

                       

                            <li className="inline-flex items-center me-5 mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EB662B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign size-6 stroke-[1.5] text-red-500"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>

                                <div className="ms-3">
                                    <p className="font-bold">ფასი:</p>
                                    <span className="text-slate-400 font-medium text-sm"> {tour.price} ლარი </span>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <h5 className="text-lg font-semibold">აღწერა:</h5>

                            <p className="text-slate-400 mt-6"> {tour.description} </p>
                           
                        </div>
        </div>

        <div className="lg:col-span-3 md:col-span-5">
          <RightSide />
        </div>
      </div>
    </div>
   </div>
   
   </>
  )
}

