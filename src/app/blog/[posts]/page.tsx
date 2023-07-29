import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { getSinglePost, parseFrontmatter } from "@/lib/utils/mdParser";
import path from "path";
import fs from 'fs';
import matter from "gray-matter";


const contentDirectory = "public/content";

  export async function getPostData(fileName:string) {
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data: frontmatter } = matter(fileContents);

    return {
    frontmatter:parseFrontmatter(frontmatter),
    content,
    };

  }

  export async function getStaticProps({ params }: { params: {posts:string}}) {
    // Add the "await" keyword like this:
    const postData = await getPostData(`blog/${params.posts}`);
  
    return {
      props: {
        postData,
      },
    };
  }

const page = ({ postData } : {postData: {
    frontmatter: any;
    content: string;
}}) => {

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
          {/* <PageHeader title={params.posts}/> */}
          <Card frontmatter={posts.frontmatter} content={`ddddd`} isSinglePost/>
      </div>
    )
  )
}

export default page