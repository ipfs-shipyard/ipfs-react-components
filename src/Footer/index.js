import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

/**
 * Is a Pane's Footer.
 *
 * @param {Object} props
 *
 * @prop {Node} children
 *
 * @return {ReactElement}
 */
export default function Footer (props) {
  return (
    <div className='footer'>
      {props.children}
    </div>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired
}
