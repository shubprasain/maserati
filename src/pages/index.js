// Stap 1: Importeer React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Inghelbrecht Agency!">
      <p>Lorem ipsum</p>
    <StaticImage
    alt="randomized unsplash image!"
    src="../images/maserati.webp"
    />
  </Layout>
  </main>
  )
}
// Stap 3: Exporteer je component
export default IndexPage