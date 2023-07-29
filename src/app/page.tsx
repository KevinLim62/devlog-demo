import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <div className='flex justify-center py-5 text-xl font-bold'>
        Devlog_demo
      </div>
      <div className='h-[80vh] flex flex-col justify-center items-center gap-5'>
        Main Page
        <Link href={`/blog`} className='bg-slate-100 text-slate-900 py-2 px-3 border-2 rounded-full hover:text-white hover:bg-slate-900 hover:border-slate-100'>
          Go to Blog Post
        </Link>
      </div>
    </section>
  )
}
