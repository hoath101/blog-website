import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
export interface Blog {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}
const Blog = async () => {
  const data: Blog[] = await client.fetch(`*[_type=="blog"]{
  title,
    description,
    "slug":slug.current,
    "imageUrl":image.asset->url
}`)
  return (
    <main className=''>
      <h1 className='text-3xl text-center font-semibold text-sky-950 mt-6 mb-4'>Welcome to My Blog.</h1>
      <hr />
      <div className='grid ml-6 grid-cols-2 lg:grid-cols-3 gap-8 mt-5 lg:ml-16'>
        {
          data.map((data, slug) => {
            return (
              <Link key={slug} href={`/${data.slug}`}>
                <div className=' shadow-lg rounded hover:scale-105 active:scale-100 transition text-center h-[380px]'>
                  <Image src={data.imageUrl} alt="abc" height={400} width={300}
                  className='ml-1 w-[380px] h-[245px] p-2'></Image>
                  <div>
                    <h2 className='text-2xl mb-3 mt-2'>
                      {data.title}
                    </h2>
                    <p className='line-clamp-3 mt-3 ml-4 mr-4'>
                      {data.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </main>
  )
}

export default Blog