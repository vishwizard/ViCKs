import Link from 'next/link'
import React from 'react'

export default function Avatar(size) {
  return (
    <Link href={"/profile"}>
      <div className='hover:cursor-pointer size-14 rounded-full overflow-hidden'>
        <img src={'/1.jpg'} className='shadow-md shadow-gray-500 ' />
      </div>
    </Link>
  )
}
