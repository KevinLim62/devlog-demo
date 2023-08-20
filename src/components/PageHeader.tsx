"use client";
import Link from 'next/link';

type PageHeaderProps = {
  title:string
}
const PageHeader:React.FC<PageHeaderProps> = ({
  title
}) => {
  return (
    <section>
        <div className="flex bg-slate-500 p-8 py-8 mb-5 h-full relative">
          <div className='absolute top-6'>
            <div className='flex gap-4'>
              <Link className='px-4 py-2 rounded-lg bg-slate-700 text-lg hover:scale-[1.05] transition-transform delay-100' href="https://kevinlim62.github.io/donjonDraft/">Donjon</Link>
              <Link className='px-5 py-2 rounded-lg bg-slate-700 text-lg hover:scale-[1.05] transition-transform delay-100' href="/">Home</Link>
            </div>
          </div>
          <h1 className="w-full text-center text-xl">
            {title}
          </h1>
        </div>
    </section>
  );
};

export default PageHeader;