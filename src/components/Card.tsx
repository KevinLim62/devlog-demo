"use client";

import dateFormat from "@/lib/utils/dateFormat";
import { Post } from "@/types";
import Image from "next/image";

const Card:React.FC<Post> = ({
    frontmatter,
    content,
    fileName,
    isSinglePost,
}) => {

  return (
    <section>
        <div className="w-full flex flex-col space-y-2">
            <div className="w-full rounded-md bg-transparent overflow-hidden">
                <Image 
                    alt="post_img"
                    src={frontmatter.image!}
                    sizes="100vw"
                    width={100}
                    height={100}
                    quality={40}
                    style={{
                    width:'100%',
                    height:'80%',
                    }}
                />
            </div>
            <div>
                {frontmatter.title}
            </div>
            <div className="flex flex-row h-[50px] items-center justify-start">
                <div className="w-full">
                    {frontmatter.author}
                </div>
                <div className="w-full">
                    {frontmatter.tags && frontmatter.tags.map((tag,index) => (
                        `${tag}${index === frontmatter.tags.length-1? "":","} `
                    ))}
                </div>
                <div className="w-full">
                    {frontmatter.date && dateFormat(frontmatter.date)}
                </div>
            </div>
            <div className={`${isSinglePost? "h-full text-justify": "h-[150px] overflow-hidden text-ellipsis"}`}>
                {content}
            </div>
            {!isSinglePost && (
                <div>
                <button className="rounded-md border-2 border-slate-200 py-1 px-2 hover:text-black hover:bg-white transition-colors duration-200">Read More</button>  
                </div>
            )}
        </div>
    </section>
  )
}

export default Card