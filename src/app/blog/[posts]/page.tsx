import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { getSinglePost } from "@/lib/utils/mdParser";


const page = ({ params }: {params: {posts:string}} ) => {
   
const posts = getSinglePost(`blog/${params.posts}.md`);    

return (
    <div className='w-full px-[10%] py-10'>
        <PageHeader title={params.posts}/>
        <Card frontmatter={posts.frontmatter} content={posts.content} isSinglePost/>
    </div>
    )
}




export default page

