import React from 'react'
import styled from 'styled-components'

function SmallTitle({icon, title}) {
  return (
    <SmallTitleStyles>
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
        color: var(--white-color);
        font-size: 1.6rem;
    }
`

export default SmallTitle