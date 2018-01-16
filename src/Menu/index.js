import React from 'react'

import './style.css'

export default function Menu (props) {
  return (
    <div className='menu'>
      {props.children}
    </div>
  )
}
