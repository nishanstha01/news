import React, { useState, useEffect } from 'react'

import Link from 'next/link';
import { getCategories } from '@/services'

const Header = () => {
  const [Categories, setCategories] = useState([]);
  
    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, []);
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400
      py-8'>
        <div className='md:float-left block'>
            <Link href="/">
            <span className='cursor-pointer font-bold text-4xl text-white'>
            शिक्षा सरोकार 
            </span>
            </Link>
        </div>
            <div className='hidden md:float-left md:contents'>
                {Categories.map((category) => (
                    <Link key={category.slug} href="https://Sikshyasarokar.github.io/sarokar1/">
                        <span className='md:float-right mt-2 align-middle text-white
                       ml-4 font-semibold cursor-pointer'>
                               {category.name}
                        </span>          
                    </Link>
                   ))}
            </div>
      </div>
    </div>
  );
}

export default Header
