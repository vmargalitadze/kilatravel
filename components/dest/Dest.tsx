import Image from 'next/image';
import LinkAll from '../ui/link';
import Link from 'next/link';
import './dest.css'
import { getAllTours } from '@/utils/actions';
import { FaArrowRight } from 'react-icons/fa';
async function Dest() {
    const tours = await getAllTours();
    const six = tours.slice(1, 7);
  return (
    <div className=" overflow-hidden md:mt-24 mt-16 layout-pb-xl">
    <div className="container mx-auto ">
    <div className="grid grid-cols-1  text-center"><h3 className="mb-6 md:text-3xl text-2xl md:leading-normal text_header leading-normal font-semibold">იმოგზაურეთ ჩვენთან ერთად</h3></div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
      {six.map( (tour) => (
      <div key={tour.id} className="group rounded-md shadow dark:shadow-gray-700">
        <div className="relative overflow-hidden rounded-t-md  dark:shadow-gray-700 mx-3 mt-3">
        <img src={tour.images[0]} className="" alt="" />
        <div className="p-4"><p className="flex items-center text-slate-400 font-medium mb-2">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-[#EB662B] size-4 me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>  {tour.location} </p>
          <p>
          {tour.title}
        </p>
      <div className="mt-2 pt-2 flex justify-between items-center border-t border-slate-100 dark:border-gray-800"><h5 className="text-lg font-medium text-[#EB662B] "> {tour.price} ლარი </h5><Link className="text-slate-400 hover:text-[#EB662B]" href={`/tours/${tour.id}`}>აღმოაჩინე<i className="mdi mdi-arrow-right"></i></Link>
            </div></div>
        </div>
      </div>
      ))}
    </div>
    <div className="arr">
  <div className="mt-6 text-center flex items-center justify-center gap-2">
    <Link
      className="text-[#05073c] hover:text-[#EB662B] inline-flex items-center"
      href="/all"
    >
ყველა ტური <FaArrowRight className='ml-3' />
    </Link>
  </div>
</div>

    </div>
  </div>
  
  )
}

export default Dest