import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="flex flex-col h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="flex justify-center h-16">
      
    </header>
    <div className="flex-grow mx-8 md:mx-24 xl:mx-60">
      {children}
    </div>
    <footer className="flex justify-center h-16">
      <span>By <a href="https://www.thepaulcushing.com">Paul Cushing</a></span>
    </footer>
  </div>
)

export default Layout
