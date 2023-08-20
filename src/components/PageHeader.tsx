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
        <div className="flex bg-slate-500 p-8 py-8 mb-5 text-xl h-full relative">
          <Link className='absolute hover:scale-[1.05] transition-transform delay-100' href="/">Home</Link>
          <h1 className="w-full text-center">
            {title}
          </h1>
        </div>
    </section>
  );
};

export default PageHeader;