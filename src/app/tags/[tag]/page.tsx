import { Post } from '@/types';
import { getAllPosts } from '@/lib/utils/mdParser';
import PageHeader from '@/components/PageHeader';
import Searchbar from '@/components/Searchbar';

const page = ({ params } : { params: {tag:string}}) => {
const posts:Post[] = getAllPosts("blog");
const filterByTags = posts.filter((post) => {
  // Check if post.data.categories is defined and is an array
  return post.frontmatter.tags && Array.isArray(post.frontmatter.tags)
    ? post.frontmatter.tags.map((tag) => tag.toLowerCase()).includes(params.tag.toLowerCase())
    : false;
});

  return (
    <>
      <section className="w-full px-[10%] py-10">
        <PageHeader title={params.tag} />
        <div className="lg:flex">
            <div className="lg:w-full space-y-5">
                <Searchbar searchList={filterByTags} searchDisabled/>
            </div>
        </div>
      </section>
    </>
  )
}

export default page