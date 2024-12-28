import React, {useContext} from 'react'
import SidebarStyled from '../styles/ComponentStyles/SidebarStyles'
import Navigation from './Navigation'
import { DarkModeContext } from '../DarkModeContext'



function Sidebar() {
  const { darkMode } = useContext(DarkModeContext)
  
  return (
    <SidebarStyled darkMode={darkMode}>
        <Navigation/>
    </SidebarStyled>
  )
}

export default Sidebar