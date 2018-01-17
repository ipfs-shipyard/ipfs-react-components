import React from 'react'

import './styles.css'

export default function Menu (props) {
  return (
    <div className='menu'>
      {props.children}
    </div>
  )
}
