import Link from 'next/link'
import { use } from 'react'

async function getPosts() {
  let posts = await fetch(`${process.env.API_BASE_URL}/posts?limit=5`)
  return posts.json()
}

export default function Layout({ children }) {
  const { posts } = use(getPosts())

  return (
    <div>
      <ul>
        {posts.map((p) => (
          <li
            key={p.id}
            className='flex hover:bg-slate-200 underline'
          >
            <div className='mr-2'>{`${p.id}.`}</div>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
      <div className='mt-5'>{children}</div>
    </div>
  )
}
