import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { getPostData } from "@/lib/utils/mdParser";


const page = async ({ params }: {params: {posts:string}} ) => {
   
  const posts = await getPostData(`blog/${params.posts}.md`);    


return (
        <div className='w-full px-[10%] py-10'>
          <PageHeader title={params.posts}/>
          <Card frontmatter={posts.frontmatter} content={`ddddd`} isSinglePost/>
      </div>
    )
}




export default page

