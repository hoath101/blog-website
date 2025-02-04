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
    <main>
      <h1 className='text-center text-3xl font-semibold text-sky-950 mt-6 mb-4'>Welcome to Our Blog.</h1>
      <code className='absolute text-cyan-200 w-[600px] ml-10 mt-4 pr-4'>
        We are excited to share inspiring stories, helpful tips, and insightful articles with you.
        Whether you are here to learn something new, get inspired, or simply enjoy a good read, we have got you covered.
        Here, you will find a range of topics from lifestyle and wellness to tech and travel, all crafted with your
        interests in mind. Our goal is to create content that resonates with you and sparks meaningful conversations.
        Stay tuned for our latest updates, and feel free to explore our archives. We cannot wait to share this journey with you.
        <p className='mt-4 w-[800px] text-center'>
        Dont forget to subscribe to our newsletter for the latest posts delivered directly to your inbox.
      </p>
      </code>
      <Image src="/images/blog-pic.jpg" alt="blog-pic" width={600} height={300}
        className='w-[1400px] h-[300px]'></Image>
        <hr className="mt-4 "/>
      <div className='grid ml-6 grid-cols-1 lg:grid-cols-3 gap-8 mt-5 lg:ml-16'>
        {
          data.map((data, slug) => {
            return (
              <Link key={slug} href={`/${data.slug}`}>
                <div className=' shadow-lg rounded hover:scale-105 active:scale-100 transition text-center p-2 max-h-[4200px]'>
                  <Image src={data.imageUrl} alt="abc" height={400} width={300}
                    className='w-[400px] h-[245px]'></Image>
                  <div>
                    <h2 className='text-2xl mb-3 mt-2'>
                      {data.title}
                    </h2>
                    <p className='line-clamp-2 mt-3 ml-4 mr-4 '>
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