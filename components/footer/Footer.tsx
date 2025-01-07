

import Link from "next/link"
import { FaFacebook } from "react-icons/fa"
import Logo from "@/public/2/logo.jpg";
import Image from "next/image";
export default function Footer() {
  return (
<div className="footer md:mt-24 mt-16 bg-[#161c28] relative text-gray-200 dark:text-gray-200">
  <div className="container mx-auto relative">
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="py-[60px] px-0">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <div className="lg:col-span-3 md:col-span-12">
              <Link className="text-[22px] focus:outline-none" href="/">
             <Image  width={70} height={70} src={Logo} alt="logo" />
              </Link>
              <ul className="list-none mt-6 space-x-1" >
              <li className="inline"><a className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300" href="https://www.facebook.com/shreethemes" target="_blank"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-4 align-middle" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Buy Now</title><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a></li>
              <li className="inline"><a className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300" href="https://www.instagram.com/shreethemes" target="_blank"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-4 align-middle" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Buy Now</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
              </ul>
            </div>

            <div className="lg:col-span-3 md:col-span-4">
              <div className="lg:ms-8">
              <h5 className="tracking-[1px] text-gray-100 font-semibold">ინფორმაცია</h5>
              <div className="flex mt-4">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-[#EB662B] me-2 mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div className=""><h6 className="text-gray-300" > თბილისი <br/> საქართველო </h6> </div>
              </div>
              <div className="flex mt-4">
              <svg stroke="currentColor" fill="#EB662B" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-4 text[#EB662B] me-2 mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <div className="">
                <Link className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out" href='kila.travel2018@gmail.com' > kila.travel2018@gmail.com</Link>
              </div>
              </div>
              <div className="flex mt-4">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-[#EB662B] me-2 mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div className=""><a className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out" href="tel:+995571191673">+995 571 19 16 73</a></div>
              </div>
              </div>
            </div>

            <div className="lg:col-span-3 md:col-span-4">
              <div className="lg:ms-8">
              <h5 className="tracking-[1px] text-gray-100 font-semibold">საიტი</h5>
              <ul className="list-none footer-list mt-6">
                <li className="mt-[10px] first:mt-0">
                  <a className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out" href="/aboutus">
                  <i className="mdi mdi-chevron-right"></i> About us</a></li>
                  <li className="mt-[10px] first:mt-0"><a className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out" href="/services">
                  <i className="mdi mdi-chevron-right"></i> Services</a>
                  </li>
                  <li className="mt-[10px] first:mt-0">
                    <a className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out" href="/team">
                    <i className="mdi mdi-chevron-right"></i> Team</a></li><li className="mt-[10px] first:mt-0">
                      <a className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out" href="/pricing">
                      <i className="mdi mdi-chevron-right"></i> Pricing</a></li>
                      <li className="mt-[10px] first:mt-0"><a className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out" href="/blogs"><i className="mdi mdi-chevron-right"></i> Blog</a>
                      </li>
                    </ul>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
</div>
  
  
  )
}




