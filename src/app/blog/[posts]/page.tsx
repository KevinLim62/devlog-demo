import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { getSinglePost } from "@/lib/utils/mdParser";


const page = ({ params } : { params: {posts:string}}) => {
  const postsTest = getSinglePost(`blog/${params.posts}`);
  if(!postsTest) throw new Error("Page not found");
  
  const posts = {
    frontmatter: {
        title: "test",
        meta_title: "string",
        description: "string",
        image: "string",
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