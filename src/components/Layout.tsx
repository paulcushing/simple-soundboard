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
      <meta name="description" content="A simple soundboard built with NextJS and Typescript" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#252070" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <header className="flex justify-center h-16">
      
    </header>
    <div className="flex-grow mx-8 md:mx-24 xl:mx-60 justify-center">
      {children}
    </div>
    <footer className="flex justify-center h-16">
      <span>By <a href="https://www.thepaulcushing.com">Paul Cushing</a></span>
    </footer>
  </div>
)

export default Layout
