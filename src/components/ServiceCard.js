import React, { useContext } from 'react'
import ServiceCardStyles from '../styles/ComponentStyles/ServiceCardStyles'
import { DarkModeContext } from '../DarkModeContext'

function ServiceCard({image, title, paragraph}) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <ServiceCardStyles darkMode={darkMode}>
        <div className="container">
            <img src={image} alt="" />
            <h4>{title}</h4>
            <p>{paragraph}</p>
        </div>
    </ServiceCardStyles>
  )
}

export default ServiceCard