
import PageHeader from '@/components/PageHeader';
import Searchbar from '@/components/Searchbar';
import Pagination from '@/components/Pagination';
import PostSidebar from '@/components/PostSidebar';
import { getAllPosts, getSinglePost } from '../../lib/utils/mdParser';
import { getAllTaxonomy, getTaxonomy } from "@/lib/utils/taxonomParser";

const pagination = 4;
const blog_folder = "blog";

const page = () => {
       const allCategories = getAllTaxonomy(blog_folder, "categories");
       const categories = getTaxonomy(blog_folder, "categories");
       const tags = getTaxonomy(blog_folder, "tags");
       const postIndex = getSinglePost("_index");
       const posts =  getAllPosts("blog");
       const totalPages = Math.ceil(posts.length / pagination);
       
      return (
           <>
            <section className="w-full">
                <PageHeader title={postIndex["frontmatter"].title}/>
                <div className="lg:flex">
                    <div className="lg:w-[70%] space-y-10">
                    <Searchbar searchList={posts}/>
                    <Pagination
                            section={blog_folder}
                            currentPage={1}
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