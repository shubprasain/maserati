import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'

// Step 2: Definieer je component
const Maserati = ({data: {allWpCar: {edges}}}) => {
  return (
    <Layout pageTitle="List of Maserati car">
    {edges.map((item) => {
        const maserati = item.node.maserati;
        return <p key={item.node.id}>{maserati.title} {maserati.doors}</p>
      })}
    </Layout>
  )
}
export const query = graphql`
query {
  allWpCar {
    edges {
      node {
        id
        maserati {
          acceleration
          description
          constructionYear
          doors
          gearBox
          fieldGroupName
          title
          seats
          maxPower
          length
        }
      }
    }
  }
}
`

// Stap 3: Exporteer je component
export default Maserati