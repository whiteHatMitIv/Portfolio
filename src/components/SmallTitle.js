import React, { useContext } from 'react'
import styled from 'styled-components'
import { DarkModeContext } from '../DarkModeContext'

function SmallTitle({icon, title}) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <SmallTitleStyles darkMode={darkMode}>
        <p>{icon}</p>
        <h3>{title}</h3>
    </SmallTitleStyles>
  )
}

const SmallTitleStyles = styled.div`
    display: flex;
    align-items: center;

    p {
        margin-right: 1rem;

        svg {
            font-size: 1.8rem;  
        }
    }

    h3 {
        color: ${({ darkMode }) => darkMode ? "var(--white-color)" : "var(--font-dark-color)"};
        font-size: 1.6rem;
    }
`

export default SmallTitle