import Link from "next/link";

type PostSidebarProps = {
  tags: string[];
  categories: string[];
  allCategories: string[];
}

const PostSidebar:React.FC<PostSidebarProps> = ({
  tags,
  categories,
  allCategories,
}) => {
  return (
    <div className="lg:col-4 space-y-5">
      {/* <!-- categories --> */}
      <div className="mb-8 ">
        <h5 className="mb-6 text-center">Categories</h5>
        <div className="rounded bg-slate-500 p-8">
          <ul className="space-y-4">
            {categories.map((category: string) => {
              const count = allCategories.filter(
                (c: string) => c === category
              ).length;
              return (
                <li key={category}>
                  
                  <Link 
                    className="flex justify-between cursor-pointer text-black hover:text-slate-100"
                    href={`/categories/${category}`}
                    >
                    {category} <span>({count})</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <!-- tags --> */}
      <div className="mb-8">
        <h5 className="mb-6 text-center">Tags</h5>
        <div className="rounded bg-slate-500 p-8">
          <ul>
            {tags.map((tag: string) => {
              return (
                <li className="inline-block" key={tag}>
                  <Link
                    className="m-1 block rounded cursor-pointer text-white px-2 hover:bg-white hover:text-black"
                    href={`/tags/${tag}`}
                    >
                    {tag}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostSidebar;