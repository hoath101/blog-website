import { Blog } from "@/app/page";
import { client } from "@/sanity/lib/client"
import Image from "next/image";

const BlogPost = async () => {
  const data:Blog =await client.fetch(`*[_type=="blog"]{
    title,
      description,
      slug,
      "imageUrl":image.asset->url
  }[3]`);
return(
    <main>
      <div className="gap-4 p-4 justify-center items-center">
        <div className="flex items-center justify-center">
          <Image src={data.imageUrl} alt="abc" height={500} width={700}></Image>
        </div>
        <div>
          <h2 className="text-2xl p-4 m-4 font-semi-bold text-center">
            {data.title}
          </h2>
          <p className="text-center ml-20 mr-20">
            {data.description}
          </p>
        </div>
      </div>
    </main>
  )
}

export default BlogPost

