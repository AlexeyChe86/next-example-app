'use client'

import Link from 'next/link'

import menu from '../../helpers/nav/config'

export default function index() {
  return (
    <nav className='flex bg-blue-700 text-white p-5'>
      {menu.map((item) => (
        <div
          key={item.id}
          className='mr-4'
        >
          <Link href={item.path}>{item.name}</Link>
        </div>
      ))}
    </nav>
  )
}
