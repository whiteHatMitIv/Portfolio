import React from 'react'
import PrimaryButtonStyles from '../styles/ComponentStyles/PrimaryButtonStyles'

function PrimaryButton({title}) {
  return (
    <PrimaryButtonStyles>
        {title}
    </PrimaryButtonStyles>
  )
}

export default PrimaryButton