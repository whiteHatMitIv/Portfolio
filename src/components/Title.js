import React, { useContext } from 'react'
import TitleStyles from '../styles/ComponentStyles/TitleStyles'
import { DarkModeContext } from '../DarkModeContext'

function Title({title, span}) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <TitleStyles darkMode={darkMode}>
        <h2>{title} <span>{span}</span></h2>
    </TitleStyles>   
  )
}

export default Title