import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'

const CarPage =({data: {wpCar:{maserati:maserati}}}) => {
    
    return (
       <Layout>
          <div>
      <h3>{maserati.title}</h3>
      <h1></h1>
      <div dangerouslySetInnerHTML={{__html: maserati.description}} />
      <p>Construction Year: {maserati.constructionYear}</p>
      <p>Doors: {maserati.doors}</p>
      <p>Acceleration: {maserati.acceleration}</p>
      <p>Gearbox: {maserati.gearBox}</p>
      <p>Length: {maserati.length}</p>
      <p>MaxPower: {maserati.maxPower}</p>
      <p>Seats : {maserati.seats}</p>
    </div>

       </Layout>
    )
}
export const query = graphql`
query ($id: String) {
    wpCar(id:{eq:$id}) {
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
        }
    }
}
`

export default CarPage