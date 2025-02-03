import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='overflew-hidden'>
        <nav className='flex justify-between ml-10 mr-10 mt-4'>
            <h2 className='text-xl font-bold text-pretty text-amber-700'>
                BLOG
            </h2>
            <ul className='flex gap-6'>
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header