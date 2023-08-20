import { Post } from '@/types';
import { getAllPosts } from '@/lib/utils/mdParser';
import PageHeader from '@/components/PageHeader';
import Searchbar from '@/components/Searchbar';

const page = ({ params } : { params: {category:string}}) => {
const posts:Post[] = getAllPosts("blog");
const filterByCategories = posts.filter((post) => {
  // Check if post.data.categories is defined and is an array
  return post.frontmatter.categories && Array.isArray(post.frontmatter.categories)
    ? post.frontmatter.categories.map((category) => category.toLowerCase()).includes(params.category.toLowerCase())
    : false;
});

  return (
    <>
      <section className="w-full px-[10%] py-10">
        <PageHeader title={params.category} />
        <div className="lg:flex">
          <div className="lg:w-full space-y-5">
                <Searchbar searchList={filterByCategories} searchDisabled/>
            </div>
        </div>
      </section>
    </>
  )
}

export default page