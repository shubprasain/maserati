import React from "react"
import {Link} from "gatsby"
import { GatsbyImage,getImage } from "gatsby-plugin-image"
import {wrapper,maseratiInfo,container} from './maserati.module.css'



const Maserati = ({maserati,slug}) => {
    const profile =  getImage(maserati.maserati.image.localFile)
    
    return (
       <Link className={wrapper} to={slug}>
       <GatsbyImage
         image={profile}
       alt={maserati.maserati.image.altText}/>
       
       <article className={maseratiInfo}>
      {maserati.maserati.title} 
        </article>     
        
       </Link> 
    )

}


export default Maserati