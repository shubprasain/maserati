import { graphql } from 'gatsby'
import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import Layout from '../../components/layout'
import {carInfo} from './index.module.css'

const CarPage =({data: {wpCar:{maserati:maseratis}}}) => {
        const image =  getImage(maseratis.image.localFile)

    return (
       <Layout pageTitle ='Maserati Information'>
          <section>
          <h3>{maseratis.title}</h3>
      <GatsbyImage image={image} alt={maseratis.image.altText}/> 
      <div dangerouslySetInnerHTML={{__html: maseratis.description}} />

      <table>
        <tr>
          <th className={carInfo}>Construction Year</th>
          <th className={carInfo}>{maseratis.constructionYear}</th>
        </tr>
        <tr>
          <th className={carInfo}>Doors</th>
          <th className={carInfo}>{maseratis.doors}</th>
        </tr>
        <tr>
          <th className={carInfo}>Acceleration</th>
          <th className={carInfo}>{maseratis.acceleration} in sec</th>
        </tr>
        <tr>
          <th className={carInfo}>Gearbox</th>
          <th className={carInfo}>{maseratis.gearBox}</th>
        </tr>
        <tr>
          <th className={carInfo}>Length</th>
          <th className={carInfo}>{maseratis.length} in mm</th>
        </tr>
        <tr>
          <th className={carInfo}>MaxPower</th>
          <th className={carInfo}>{maseratis.maxPower} in PK</th>
        </tr>
        <tr>
          <th className={carInfo}>Seats</th>
          <th className={carInfo}>{maseratis.seats}</th>
        </tr>


      </table>

    </section>

       </Layout>
    )
}
export const query = graphql`
query ($slug: String) {
    wpCar(slug:{eq:$slug}) {
        maserati {
      constructionYear
      description
      doors
      title
      acceleration
      fieldGroupName
      gearBox
      length
      maxPower
      seats
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
       }
      }
    }
  }
`

export default CarPage