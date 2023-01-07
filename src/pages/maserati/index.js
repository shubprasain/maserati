import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/layout'
import { getImage ,GatsbyImage} from 'gatsby-plugin-image'
import Maserati from '../../components/maserati'
import {description,hero,maseratis,section,subtitle} from '../page.module.css'


// Step 2: Definieer je component
const MaseratiPage = ({
  data: {
    allWpCar: { edges },
    wpPage: {maseratiField},
  },
}) => {
  const image = getImage(maseratiField.picture.localFile)
  return (
    
    <Layout>
      <GatsbyImage
      className={hero}
      image={image}
      alt={maseratiField.picture.altText}
      />
      <section className={section}>
        <h2 className={subtitle}>{maseratiField.title}</h2>
        <div className={description} dangerouslySetInnerHTML={{__html: maseratiField.description,}}
        />
       <div className={maseratis}>
       {edges.map((item) => {
      const maserati = item.node.maserati;
      const slug = item.node.slug;
      return <Link to={`/maserati/${slug}`}>
        <p key={item.node.id}>{maserati.title}</p>
      </Link>
    })}
        </div> 
        
      </section>
     </Layout>
  )
}

export const query = graphql`
query  {
  wpPage(slug: {eq: "maserati"}) {
    maseratiField {
      description
      title
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        altText
      }
    }
  }
  allWpCar {
    edges {
      node {
        maserati {
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
              }
            }
            altText
          }
        }
        slug
        id
      }
    }
  }
}

`

// Stap 3: Exporteer je component
export default MaseratiPage