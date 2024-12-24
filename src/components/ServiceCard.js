import React from 'react'
import ServiceCardStyles from '../styles/ComponentStyles/ServiceCardStyles'

function ServiceCard({image, title, paragraph}) {
  return (
    <ServiceCardStyles>
        <div className="container">
            <img src={image} alt="" />
            <h4>{title}</h4>
            <p>{paragraph}</p>
        </div>
    </ServiceCardStyles>
  )
}

export default ServiceCard