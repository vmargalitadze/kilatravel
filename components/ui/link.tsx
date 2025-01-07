import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

function LinkAll() {
  return (
    <Link className="buttonArrow all col-auto flex items-center" href="/all">
    <span className='font-medium text-3xl'>ყველა</span><GoArrowUpRight />
  </Link>
  )
}

export default LinkAll