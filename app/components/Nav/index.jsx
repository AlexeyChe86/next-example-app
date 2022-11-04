'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import menu from '../../helpers/nav/config'

export default function index() {
  const pathName = usePathname()
  return (
    <nav className='flex bg-blue-700 text-white'>
      {menu.map((item) => (
        <div
          key={item.id}
          className={item.path === pathName ? 'bg-yellow-400 p-5 mx-1' : 'p-5 mx-1'}
        >
          <Link href={item.path}>{item.name}</Link>
        </div>
      ))}
    </nav>
  )
}
