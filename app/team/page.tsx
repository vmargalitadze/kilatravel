import React from 'react'
import './team.css'
import image from '@/public/461532930_8839527592764080_102957538187915478_n.jpg'
import Link from 'next/link';
function Team() {
    return (
        <>
        
          <section
            style={{
              backgroundImage: ` url('/diego-jimenez-A-NVHPka9Rk-unsplash.jpg')`,
            }}
            className="relative team_header object-cover w-full h-96 items-center   bg-no-repeat "
          >
            <div className="absolute  inset-0 bg-gradient-to-b from-slate-800/60 via-slate-800/60 to-slate-700"></div>
            <div className="container team_header  relative">
              <div className="grid team_header grid-cols-1 text-center">
                <h3 className="text-4xl   font-semibold text-white">
                  ჩვენს <span className='team-span'>  შესახებ  </span> 
                </h3>
              </div>
            </div>
          </section>

          <section className="relative mx-auto md:pb-16 ">
            <div className="container mx-auto relative md:mt-24 ">
                <div className="grid md:grid-cols-12 grid-cols-1  gap-6 relative">
                <div className="md:col-span-4">
                <div className="group text-center">
      <div className="relative mt-12 md:mt-0 inline-block mx-auto  overflow-hidden">
    <img src={image.src} className="rounded-3xl" alt="" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-3xl opacity-0 group-hover:opacity-50 duration-500"></div>
    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
        <li className="inline"><a className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white" href="/aboutus">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a></li>
        
</ul>
</div>

    </div>
                 
           </div>
           
           <div className="md:col-span-7"><div className="lg:ms-8">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal text-[#05073c] font-semibold">გიორგი კიკვაძე</h3>
            <p className="text-slate-400 max-w-xl mb-6"> აქ რამე ინფორმაცია.
                </p>
    </div></div>
                </div>
            </div>
          </section>

          <section className="container mx-auto relative md:pb-16 md:mt-16 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal text-[#05073c] leading-normal font-semibold">ჩვენი გუნდი</h3>
            </div>
<div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
  <div className="lg:col-span-3 md:col-span-6">
    <div className="group text-center">
      <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
    <img src={image.src} className="" alt="" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-50 duration-500"></div>
    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
        <li className="inline"><a className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white" href="/aboutus">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a></li>
        
</ul>
</div>
<div className="content mt-3">
    <a className="text-lg font-semibold hover:text-red-500 duration-500" href="/aboutus">erti</a>
    <p className="text-slate-400">Agent</p></div></div>
    </div><div className="lg:col-span-3 md:col-span-6"><div className="group text-center"><div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
        <img src={image.src} className="" alt="" /><div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-50 duration-500"></div>
        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
        <li className="inline"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white" href="/aboutus">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link></li>
        
</ul>
            </div><div className="content mt-3"><Link className="text-lg font-semibold hover:text-red-500 duration-500" href="/aboutus">ert</Link><p className="text-slate-400">Agent</p></div></div></div><div className="lg:col-span-3 md:col-span-6"><div className="group text-center"><div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
            <img src={image.src} className="" alt="" /><div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-50 duration-500"></div>
            <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
        <li className="inline"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white" href="/aboutus">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link></li>
        
</ul>
            </div><div className="content mt-3"><a className="text-lg font-semibold hover:text-red-500 duration-500" href="/aboutus">erti</a><p className="text-slate-400">Agent</p></div></div></div><div className="lg:col-span-3 md:col-span-6"><div className="group text-center"><div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                <img src={image.src} className="" alt="" /><div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-50 duration-500"></div>
                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
        <li className="inline"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white" href="/aboutus">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link></li>
        
</ul>
                </div><div className="content mt-3"><a className="text-lg font-semibold hover:text-red-500 duration-500" href="/aboutus">erti</a><p className="text-slate-400">Agent</p></div></div></div></div>
          </section>
        </>
      );
}

export default Team