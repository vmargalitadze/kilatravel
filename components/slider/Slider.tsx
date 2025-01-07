"use client";

import React, { useEffect } from "react";
import "tiny-slider/dist/tiny-slider.css";
import "./image.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  maxGuests: number;
  startDate: string;
  endDate: string;
  location: string;
  images: string[];
}

interface SliderProps {
  tours: Tour[];
}

const Slider: React.FC<SliderProps> = ({ tours }) => {
  useEffect(() => {
    let tinySlider: any;

    const initializeSlider = async () => {
      if (typeof window !== "undefined") {
        const { tns } = await import("tiny-slider");
        tinySlider = tns({
          container: ".my-slider",
          items: 4, // Default to 4 items
          nav: false,
          mouseDrag: true,
          loop: true,
          gutter: 10,
          controls: true,
          prevButton: ".prev",
          nextButton: ".next",
          responsive: {
            0: { items: 1 },       // 1 item on small screens
            768: { items: 2 },     // 2 items on medium screens
            1024: { items: 4 },    // 4 items on large screens
          },
        });
        
      }
    };

    initializeSlider();

    return () => {
      if (tinySlider && typeof tinySlider.destroy === "function") {
        tinySlider.destroy(); 
      }
    };
  }, []);

  const six = tours.slice(1, 7);


  return (
    <div className="layout-pt-xl layout-pb-xl">


    <div className="container mx-auto px-4">

<div className="grid grid-cols-1 pb-8 text-center"><h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal text_header font-semibold">ახალი ტურები</h3></div>
      <div className="relative ">
        <ul
          className="controls flex justify-between mb-4"
          aria-label="Carousel Navigation"
        >
          <li className="prev rounded-full shadow-lg  bg-white p-2 ">
         <ChevronLeftIcon className="text-[500px] shadow-2xl" />
          </li>
          <li className="next rounded-full shadow-lg bg-white p-2">
  <ChevronRightIcon className="text-[500px] shadow-2xl" />
</li>

        </ul>

        <div className="my-slider flex gap-4">
          {six.map((tour) => (
            <div
              key={tour.id}
              className="group   relative overflow-hidden rounded-md "
            >
              <img
                src={tour.images[0]} 
                className="w-[20rem]  imagess h-auto rounded-3xl sm:h-72 md:h-80  "
                alt={tour.title}
              />
          
              <div className="absolute p-4 bottom-0 start-0">
                <h3 className="text-lg font-medium text-[#4b5563] ">
                  {tour.title}
                </h3>
                <p className="text-[#4b5563]  text-sm duration-500">
                  {tour.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Slider;
