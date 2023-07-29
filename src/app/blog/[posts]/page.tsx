import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { getPostData, getSinglePost, parseFrontmatter } from "@/lib/utils/mdParser";
import path from "path";
import fs from 'fs';
import matter from "gray-matter";


const page = async ({ params } : { params: {posts:string}}) => {

  const postsTest = await getPostData(`blog/${params.posts}`);
  
  const posts = {
    frontmatter: {
        title: "test",
        meta_title: "string",
        description: "string",
        image: "/string",
        categories: ["string1","string2","string3"],
        author: "string",
        tags: ["string1","string2","string3"],
    },
    content:"string"
  } 

  return (
    posts && (
      <div className='w-full px-[10%] py-10'>
          <PageHeader title={params.posts}/>
          <Card frontmatter={posts.frontmatter} content={`ddddd`} isSinglePost/>
      </div>
    )
  )
}

export default page