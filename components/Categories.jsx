import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import { getCategories } from '@/services'

const categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      getCategories().then((newCategories) => setCategories(newCategories))
  }, []);
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
    <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
      Category
    </h3>
      {categories.map((category) => (
        <Link key={category.slug} href="https://Sikshyasarokar.github.io/sarokar1/">
          <span className='cursor-pointer block
          pb-3 mb-3'>
          {category.name}
          </span>
        </Link>
      ))}

    </div>
  )
}

export default categories
