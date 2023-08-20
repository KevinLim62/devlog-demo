"use client";

import { Post } from '@/types';
import { useEffect, useMemo, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Card from './Card';
import Link from 'next/link';
import Pagination from './Pagination';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';


export type SearchItem = {
  frontmatter: Post["frontmatter"];
  content?: string;
  fileName?: string;
};

interface SearchbarProps {
  searchList: SearchItem[];
  searchDisabled?: boolean;
}

const Searchbar:React.FC<SearchbarProps> = ({ searchList, searchDisabled }) => {

  const searchParams = useSearchParams()
  const router = useRouter()
  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '4'

  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
  const end = start + Number(per_page) // 5, 10, 15 ...

  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>(searchList);
  const [totalPages, setTotalPages] = useState(Math.ceil(searchList.length / Number(per_page)));

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
    e.preventDefault();
  };

  useMemo(() => {
    if(page != '1' && inputVal != ""){
      router.push(`?page=1&per_page=${per_page}`);
      setInputVal(inputVal);
    }
  },[inputVal])

  useEffect(() => {
   const filterList = searchList.filter((item) => {
      return(item.frontmatter.title.trim().toLowerCase().includes(inputVal.toLowerCase()))
    });
    setSearchResults(filterList)
    setTotalPages(Math.ceil(filterList.length / Number(per_page)))
    
  },[inputVal,searchList])

  return (
    <section className="w-full">
      {!searchDisabled && (
          <div className="flex my-5 gap-2 relative mx-20">
              <input className="rounded-full w-full py-3 bg-slate-500 text-center" placeholder="Search Here" onChange={handleChange}></input>
              <button className="absolute inset-0 my-auto left-5 w-min"><AiOutlineSearch size={30}/></button>
          </div>
      )}
        <div className="lg:flex">
            <div className="lg:w-full space-y-5">
                <div className="grid grid-flow-row grid-cols-2 gap-5 mx-5">    
                    {searchResults && searchResults.slice(start,end).map((post) => (
                        <Link key={post.fileName} href={`/blog/${post.fileName}`}>
                            <Card frontmatter={post.frontmatter} content={post.content}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <Pagination
            hasNextPage={end < searchResults.length}
            hasPrevPage={start > 0}
            totalPages={totalPages}
            />
    </section>
  )
}

export default Searchbar