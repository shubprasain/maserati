/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql,Link } from "gatsby"
import { container,nav,navLinks,navLinkItem,navLinkText } from "./layout.module.css"

const Layout = ({pageTitle,children }) => {
  
  return (
    <div className={container}>
     <title>{pageTitle}</title>
     <nav className={nav}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
              </Link>
              </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
              </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/maserati">
              Maserati
              </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
