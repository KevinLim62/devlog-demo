
import PageHeader from '@/components/PageHeader';
import Searchbar from '@/components/Searchbar';
import Pagination from '@/components/Pagination';
import PostSidebar from '@/components/PostSidebar';
import { getAllPosts, getSinglePost } from '../../lib/utils/mdParser';
import { getAllTaxonomy, getTaxonomy } from "@/lib/utils/taxonomParser";

const blog_folder = "blog";

const page = ({ searchParams } : { searchParams: {[key: string]:string | string[] | undefined}}) => {

       const page = searchParams['page'] ?? '1'
       const per_page = searchParams['per_page'] ?? '4'
       const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
       const end = start + Number(per_page) // 5, 10, 15 ...
       const allCategories = getAllTaxonomy(blog_folder, "categories");
       const categories = getTaxonomy(blog_folder, "categories");
       const tags = getTaxonomy(blog_folder, "tags");
       const postIndex = getSinglePost("_index.md");
       const posts =  getAllPosts("blog");
       const totalPages = Math.ceil(posts.length / Number(per_page));
       
      return (
           <>
            <section className="w-full">
                <PageHeader title={postIndex["frontmatter"].title}/>
                <div className="lg:flex">
                    <div className="lg:w-[70%] space-y-10">
                    <Searchbar searchList={posts} start={start} end={end}/>
                    <Pagination
                        hasNextPage={end < posts.length}
                        hasPrevPage={start > 0}
                        totalPages={totalPages}
                        />
                    </div>
                    <div className="p-3 lg:w-[30%]">
                    <PostSidebar
                        categories={categories}
                        tags={tags}
                        allCategories={allCategories}
                        />
                    </div>
                </div>
            </section>
            </>
      )
    }
    
    export default page