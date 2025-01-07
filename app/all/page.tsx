
import React, { useState } from 'react';

import './all.css';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

import { BiChevronRight } from 'react-icons/bi';
import { getAllTours } from '@/utils/actions';


const ToursPage = async() => {
  const tours = await getAllTours();

  
  
  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="page-banner-content">
            <h2 className="allh2">ტურები</h2>
            <p className="pos"></p>
            <p className="allp">
              <Link className="allLink" href="/">მთავარი</Link> <BiChevronRight />   ტურები
            </p>
          </div>
        </div>
      </div>

      <div className="layout-pb-xl layout-pt-xl">
      <div className="py-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      {/* Sidebar */}
      <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">არ გადადო</h2>
            <p className="text-gray-600">დაგეგმე შემდეგი მოგზაურობა</p>
          </div>
          <div className="mb-6">
            <form className="flex items-center">
              <input
                type="text"
                className="flex-1 p-2 border rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="მოძებნე"
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
              >
                <FaSearch />
              </button>
            </form>
          </div>
          <div>
            
           
            <ul className="space-y-3">
       
              <div>
                <input
                  type="radio"
                  id="latest"
                  name="filter"
                  className="mr-2"
                />
                <label htmlFor="latest" className="text-gray-700">
                  Latest
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="europe"
                  name="filter"
                  className="mr-2"
                />
                <label htmlFor="europe" className="text-gray-700">
                  Europe
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="asia"
                  name="filter"
                  className="mr-2"
                />
                <label htmlFor="asia" className="text-gray-700">
                  Asia
                </label>
              </div>
            </ul>
          </div>
        </div>
      </div>

   
      <div className="w-full lg:w-2/3 px-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
      {tours.map( (tour) => (
      <div key={tour.id} className="group rounded-md shadow dark:shadow-gray-700">
        <div className="relative overflow-hidden rounded-t-md  dark:shadow-gray-700 mx-3 mt-3">
        <img src={tour.images[0]} className="" alt="" />
        <div className="p-4">
  <p className="flex items-center text-slate-400 font-medium mb-2">
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#EB662B] h-4 w-4 mr-2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
    {tour.location}
  </p>

  <p className="flex items-center text-slate-400 font-medium mb-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#EB662B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="6"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
    გრძელდება {tour.duration} დღე
  </p>

  <p>{tour.title}</p>

  <div className="mt-2 pt-2 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
    <h5 className="text-lg font-medium text-[#EB662B]">{tour.price} ლარი</h5>
    <Link
      className="text-slate-400 hover:text-[#EB662B]"
      href={`/tours/${tour.id}`}
    >
      აღმოაჩინე<i className="mdi mdi-arrow-right"></i>
    </Link>
  </div>
</div>

        </div>
      </div>
      ))}
    </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default ToursPage;
