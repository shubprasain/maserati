import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  nav,
  siteTitle
} from './layout.module.css'
import Footer from './footer'

const Layout = ({  children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
      <header className={siteTitle}></header>
        <ul className={navLinks}>
        <li></li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/maserati" className={navLinkText}>
              Maserati
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>  {children}</h1>
      
      </main>
      <Footer/>
    </div>
  )
}

export default Layout