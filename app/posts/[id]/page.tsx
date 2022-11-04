import { use } from 'react'

async function getPost(id) {
  const post = await fetch(`https://dummyjson.com/posts/${id}`)
  return post.json()
}

export default function Page({ params }) {
  const id = params.id
  const post = use(getPost(id))
  return (
    <div>
      <h3 className='text-lg font-bold'>{post.title}</h3>
      <p className='text-sm'>{post.body}</p>
    </div>
  )
}
