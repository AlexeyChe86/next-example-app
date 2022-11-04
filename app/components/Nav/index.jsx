'use client'

import Link from 'next/link'

export default function index() {
  return (
    <nav className='flex bg-blue-700 text-white p-5'>
      <div>
        <Link href='/'>Home</Link>
      </div>
      <div className='ml-4'>
        <Link href='/posts'>Post</Link>
      </div>
    </nav>
  )
}
