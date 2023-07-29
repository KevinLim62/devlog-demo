import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { getPostData, getSinglePost, parseFrontmatter } from "@/lib/utils/mdParser";
import path from "path";
import fs from 'fs';
import matter from "gray-matter";
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from "querystring";


interface PostProps {
    postData?: {
        frontmatter: any;
        content: string;
    };
  }


const page = async ({ params }: {params: {posts:string}} ) => {
    
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
        <div className='w-full px-[10%] py-10'>
          <PageHeader title={params.posts}/>
          {/* <Card frontmatter={posts.frontmatter} content={`ddddd`} isSinglePost/> */}
      </div>
    )
}




export default page

