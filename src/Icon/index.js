import React from 'react'
import PropTypes from 'prop-types'

import logoBlack from './ipfs-logo-black.png'
import './style.css'

/**
 * Is an Icon.
 *
 * @param {Object} props
 *
 * @prop {String} name
 *
 * @return {ReactElement}
 */
export default function Icon (props) {
  if (props.name === 'ipfs') {
    return (
      <span className='icon'>
        <img alt='IPFS Logo' src={logoBlack} />
      </span>
    )
  }

  return (
    <span className={`icon ti-${props.name}`} />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}
