"use client";

import { Post } from '@/types';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Card from './Card';
import Link from 'next/link';


export type SearchItem = {
  frontmatter: Post["frontmatter"];
  content?: string;
  fileName?: string;
};

interface SearchbarProps {
  searchList: SearchItem[];
  start: number;
  end: number;
}

const Searchbar:React.FC<SearchbarProps> = ({ searchList, start, end }) => {

  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  useEffect(() => {
   const filterList = searchList.filter((item) => {
      return(item.frontmatter.title.trim().toLowerCase().includes(inputVal.toLowerCase()))
    }).slice(start,end);
    setSearchResults(filterList)
  },[inputVal,searchList])
    
  return (
    <section className="w-full">
        <div className="flex my-5 gap-2 relative mx-20">
            <input className="rounded-full w-full py-3 bg-slate-500 text-center" placeholder="Search Here" onChange={handleChange}></input>
            <button className="absolute inset-0 my-auto left-5 w-min"><AiOutlineSearch size={30}/></button>
        </div>
        <div className="lg:flex">
            <div className="lg:w-full space-y-5">
                <div className="grid grid-flow-row grid-cols-2 gap-5 mx-5">    
                    {searchResults && searchResults.map((post) => (
                        <Link key={post.fileName} href={`/blog/${post.fileName}`}>
                            <Card frontmatter={post.frontmatter} content={post.content}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Searchbar