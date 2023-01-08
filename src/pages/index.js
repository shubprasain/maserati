// Stap 1: Importeer React
import * as React from 'react'
import {GatsbyImage,getImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import {form,section,header,headerInfo,headerPicture,headerTitle,Description,maseratis,subtitle} from './page.module.css'
import Maserati from '../components/maserati'


// Stap 2: definieer je component
const IndexPage = ({
  data : {
    wpPage:{homeFields},
  },
}) => {

  const image = getImage(homeFields.picture.localFile)
  

  return (
 <Layout>
  
    <section className={header}>
     <article className={headerInfo}>
      <h1 className={headerTitle} >{homeFields.title}</h1>
      <GatsbyImage className={headerPicture}
        image={image}

      />
      </article>
      <p className={Description} dangerouslySetInnerHTML={{ __html: homeFields.description }}/>
    </section>
    <section className={section}>
      <p>My Top 3 Maserati</p>
      <div className={maseratis}>
        {homeFields.featuredProducts.map(maserati => {
          return <Maserati key={maserati.id} slug={`maserati/${maserati.slug}`} maserati={maserati} />
        })}
      </div>
    
     
    </section>
  
      <section className={form}>
        <form name="contact" method="POST" data-netlify="true">
            <label>Firstname:</label>
            <input type="text" name="name" placeholder='Your Firstname' required={true} />
            <label>Lastname:</label>
            <input type="text" name="name" placeholder='Your Lastname' required={true} />
            <label>Your Email:</label>
            <input type="email" name="email" placeholder='Your email' required={true} />
            <label>Subject:</label>
            <input type="text" name="subject" placeholder='Subject' required={true} />
            <label>Message:</label>
            <textarea name="message" placeholder='Type your message' required={true}></textarea>
            <input type="hidden" name="form-name" value="contact" />
            <button type="submit">Send</button>
        </form>
      </section>
</Layout>
  )
}

export const query = graphql `
query {
  wpPage(slug: {eq: "home"}) {
    homeFields {
      title
      description
      fieldGroupName
      featuredProducts {
				... on WpCar {
				id
        slug
          maserati {
						title
            description
            image {
              altText
							localFile {
								childImageSharp {
									gatsbyImageData(placeholder:BLURRED)
                }
              }
            }
          }
        }
      }
      picture {
				localFile {
				childImageSharp {
					gatsbyImageData(placeholder:BLURRED)
        }
        }
      }
    }
  }
}



`

export default IndexPage