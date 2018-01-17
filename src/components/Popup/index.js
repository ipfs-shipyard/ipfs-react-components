import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

/**
 * It's a Popup.
 *
 * @param {Object} props
 *
 * @prop {Any} children
 *
 * @return {ReactElement}
 */
export default function Popup (props) {
  let className = 'popup'
  if (props.class) {
    className += ' ' + props.class
  }

  return (
    <div className='overlay'>
      <div className={className}>{props.children}</div>
    </div>
  )
}

Popup.propTypes = {
  class: PropTypes.string,
  children: PropTypes.any.isRequired
}
