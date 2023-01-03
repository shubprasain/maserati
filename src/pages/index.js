// Stap 1: Importeer React
import * as React from 'react'
import {Link} from "gatsby"
import Layout from '../components/layout'
// Stap 2: definieer je component
const IndexPage = () => {
  return (
  <Layout pageTitle="Welcome to Inghelbrecht Agency!">
      <p>Lorem ipsum</p>
  </Layout>
  )
}
// Stap 3: Exporteer je component
export default IndexPage