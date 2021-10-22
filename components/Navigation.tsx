import React, { ReactNode } from 'react'
import Link from 'next/link'

const Navigation = () => (
  <nav>
    <Link href="/">
      <a className="text-lg font-medium text-blue-600 hover:text-blue-800">Home</a>
    </Link>{' '}
    |{' '}
    <Link href="/about">
      <a className="text-lg font-medium text-blue-600 hover:text-blue-800">About</a>
    </Link>{' '}
    |{' '}
    <Link href="/users">
      <a className="text-lg font-medium text-blue-600 hover:text-blue-800">Users List</a>
    </Link>{' '}
    | <a href="/api/users" className="text-lg font-medium text-blue-600 hover:text-blue-800">Users API</a>
  </nav>
)

export default Navigation
