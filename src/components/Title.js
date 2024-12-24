import React from 'react'
import TitleStyles from '../styles/ComponentStyles/TitleStyles'

function Title({title, span}) {
  return (
    <TitleStyles>
        <h2>{title} <span>{span}</span></h2>
    </TitleStyles>   
  )
}

export default Title