import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { getPostData, getSinglePost, parseFrontmatter } from "@/lib/utils/mdParser";
import path from "path";
import fs from 'fs';
import matter from "gray-matter";
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from "querystring";




const page = async ({ postData }:any) => {
    
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
          <PageHeader title={postData.fileName}/>
          <Card frontmatter={posts.frontmatter} content={`ddddd`} isSinglePost/>
      </div>
    )
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    let postData = {};

    if (params && 'posts' in params) {
      const { posts } = params as ParsedUrlQuery;
      // Fetch post data using getPostData function
      postData = getPostData(`blog/${params.posts}`);
  
      // You should add proper error handling here if the post data is not found.
    }
    return {
      props: {
        postData,
      },
    };
};


export default page

