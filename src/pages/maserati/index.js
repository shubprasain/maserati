import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/layout'


// Step 2: Definieer je component
const MaseratiPage = ({data: {allWpCar: { edges }}}) => {
  return (
    <Layout>
    {edges.map((item) => {
      const maserati = item.node.maserati;
      const slug = item.node.slug;
      return <Link to={`/maserati/${slug}`}>
        <p key={item.node.id}>{maserati.title}</p>
      </Link>
    })}

    
    
    </Layout>
  )
}

export const query = graphql`
query {
  allWpCar {
    edges {
      node {
        maserati {
          title
          description
        }
        id
        slug
      }
    }
  }
}

`

// Stap 3: Exporteer je component
export default MaseratiPage