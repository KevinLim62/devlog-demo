import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      Main Page
      <Link href={`/blog`}>
        Go to Blog Post
      </Link>
    </section>
  )
}
