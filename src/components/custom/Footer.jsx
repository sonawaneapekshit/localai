'use client';

import React, { useEffect, useState } from 'react';

const Footer = () => {

  const yearData = new Date();

  const [year, CopyrightYear] = useState(yearData.getFullYear())

  // useEffect(() => {

  // })

  console.log(yearData);

  return (
    <footer className='bg-accent py-4 md:py-6 text-2xl md:text-3xl text-white'>
      <nav className='flex flex-col'>
        <div className='flex justify-center'>
          <p className='text-xl font-semibold'>@Copyright reserverd {year}</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
