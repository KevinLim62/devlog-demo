import Link from 'next/link';
import { Post } from '@/types';
import { getAllPosts } from '@/lib/utils/mdParser';
import PageHeader from '@/components/PageHeader';
import Card from '@/components/Card';

const page = ({ params } : { params: {tag:string}}) => {
const posts:Post[] = getAllPosts("blog");
const filterByTags = posts.filter((post) => {
  // Check if post.data.categories is defined and is an array
  return post.frontmatter.tags && Array.isArray(post.frontmatter.tags)
    ? post.frontmatter.tags.map((tag) => tag.toLowerCase()).includes(params.tag)
    : false;
});

  return (
    <>
      <section className="w-full px-[10%] py-10">
        <PageHeader title={params.tag} />
        <div className="lg:flex">
            <div className="lg:w-full space-y-5">
                <div className="grid grid-flow-row grid-cols-2 gap-5 mx-5">    
                    {filterByTags && filterByTags.map((post) => (
                        <Link key={post.fileName} href={`/blog/${post.fileName}`}>
                            <Card frontmatter={post.frontmatter} content={post.content}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default page